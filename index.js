const config = {
    iceServers: [
        {
            urls: ['stun:stun.l.google.com:19302']
        },
    ]
};
/**
 * get real ip by RTCPeerConnection
 * @returns 
 */
export default function getRealIp() {
    return new Promise((resolve) => {
        const pc = new RTCPeerConnection(config);
        pc.onicecandidate = e => {
            if (e?.candidate?.type === "srflx") {
                resolve(e.candidate.address)
            }
        }
        pc.createOffer({ offerToReceiveAudio: 1 }).then(e => {
            pc.setLocalDescription(e)
        });
    })
}
