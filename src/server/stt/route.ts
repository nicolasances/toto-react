import { NextRequest, NextResponse } from 'next/server';
import SpeechClient from '@google-cloud/speech';

/**
 * POST /api/stt
 *
 * Accepts an audio file as FormData (field name: "file"), transcribes it
 * using Google Cloud Speech-to-Text, and returns { text }.
 *
 * Google Cloud credentials are provided by the consuming app's environment
 * (ADC or GOOGLE_APPLICATION_CREDENTIALS) — this package has no credential config.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
        return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const audioBytes = Buffer.from(arrayBuffer).toString('base64');

    const mimeType = file.type ?? '';
    const fileName = file.name ?? '';

    const encoding: 'MP3' | 'WEBM_OPUS' =
        mimeType.includes('mp3') || mimeType.includes('mpeg') || fileName.endsWith('.mp3')
            ? 'MP3'
            : 'WEBM_OPUS';

    const client = new SpeechClient.SpeechClient();

    const [response] = await client.recognize({
        audio: { content: audioBytes },
        config: {
            encoding,
            sampleRateHertz: 48000,
            languageCode: 'en-US',
        },
    });

    const transcript =
        response.results
            ?.map((r) => r.alternatives?.[0]?.transcript ?? '')
            .join(' ')
            .trim() ?? '';

    return NextResponse.json({ text: transcript });
}
