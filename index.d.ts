/**
 * Get the real IP address using RTCPeerConnection.
 * @param iceServers - The array of ICE servers.
 * @returns A promise that resolves to the real IP address.
 */
export default function getRealIp(iceServers?: RTCIceServer[]): Promise<string>;
