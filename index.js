const config = {
    iceServers: [
        {
            urls: ['stun:stun.l.google.com:19302']
        },
    ]
};
/**
 * get real ip by RTCPeerConnection
 * @params iceServers
 * @returns 
 */
export default function getRealIp(iceServers) {
    return new Promise((resolve) => {
        if (iceServers.length) {
            config.iceServers = iceServers
        }
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
