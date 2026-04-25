/**
 * toto-react — client-side barrel
 *
 * Re-exports all client-side components, hooks, contexts, and API clients.
 */

// Components
export { AgentConversationView } from './components/AgentConversationView';
export type { AgentConversationViewProps } from './components/AgentConversationView';

export { AudioVisualizer } from './components/AudioVisualizer';
export type { AudioVisualizerProps, AudioVisualizerTheme } from './components/AudioVisualizer';

export { ChatDock } from './components/ChatDock';
export type { ChatDockProps } from './components/ChatDock';

export { default as ChatInput } from './components/ChatInput';
export type { ChatInputHandlers } from './components/ChatInput';

export { MaskedSvgIcon } from './components/MaskedSvgIcon';

export { VoiceAgentDock } from './components/VoiceAgentDock';
export type { VoiceAgentDockProps } from './components/VoiceAgentDock';

export { default as SideMenu } from './components/SideMenu';
export type { SideMenuItem, SideMenuToggleableItem } from './components/SideMenu';

export { default as ToggleableMenuItem } from './components/ToggleableMenuItem';
export type { ToggleableMenuItemProps } from './components/ToggleableMenuItem';

export { default as RoundButton } from './components/buttons/RoundButton';

// Hooks
export { useAgentVoiceInteraction } from './hooks/useAgentVoiceInteraction';
export type {
  AgentVoiceState,
  UseAgentVoiceInteractionOptions,
  UseAgentVoiceInteractionResult,
} from './hooks/useAgentVoiceInteraction';

export { useSpeechRecognition } from './hooks/useSpeechRecognition';

export { useVoiceRecording } from './hooks/useVoiceRecording';
export type { MediaRecorderEvent } from './hooks/useVoiceRecording';

// Contexts
export { AudioProvider, useAudio } from './context/AudioContext';

export { CarModeContextProvider, useCarMode } from './context/CarModeContext';

// API clients
export { TotoAPI, cid } from './api/TotoAPI';
export type { EndpointResolver } from './api/TotoAPI';
export { GaleBrokerAPI } from './api/GaleBrokerAPI';
export { GoogleSTTAPI } from './api/GoogleSTTAPI';
export { GoogleTTSAPI } from './api/GoogleTTSAPI';
export { WhisperAPI } from './api/WhisperAPI';
