import { NextRequest, NextResponse } from 'next/server';
import TextToSpeechClient from '@google-cloud/text-to-speech';

/**
 * POST /api/tts/synthesize
 *
 * Accepts JSON { text, languageCode?, voiceName? }, synthesizes it using
 * Google Cloud Text-to-Speech (Neural2-J voice by default), and returns
 * an MP3 audio stream.
 *
 * Google Cloud credentials are provided by the consuming app's environment
 * (ADC or GOOGLE_APPLICATION_CREDENTIALS) — this package has no credential config.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
    const body = (await req.json()) as {
        text: string;
        languageCode?: string;
        voiceName?: string;
    };

    const { text, languageCode = 'ja-JP', voiceName = 'ja-JP-Neural2-B' } = body;

    if (!text) {
        return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    const client = new TextToSpeechClient.TextToSpeechClient();

    const [response] = await client.synthesizeSpeech({
        input: { text },
        voice: { languageCode, name: voiceName },
        audioConfig: { audioEncoding: 'MP3' },
    });

    const audioContent = new Uint8Array(response.audioContent as Uint8Array);

    return new NextResponse(audioContent, {
        status: 200,
        headers: {
            'Content-Type': 'audio/mpeg',
            'Content-Length': String(audioContent.byteLength),
        },
    });
}
