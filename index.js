const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"],
    },
  ],
};
/**
 * get real ip by RTCPeerConnection
 * @params iceServers
 * @returns
 */
export default function getRealIp(iceServers) {
  return new Promise((resolve) => {
    if (iceServers.length) {
      config.iceServers = iceServers;
    }
    let pc = new RTCPeerConnection(config);
    pc.onicecandidate = (e) => {
      if (e?.candidate?.type === "srflx") {
        resolve(e.candidate.address);
      }
    };
    pc.onicegatheringstatechange = () => {
      if (pc.iceGatheringState === "complete") {
        pc.close();
        pc = null;
      }
    };
    pc.createOffer({ offerToReceiveAudio: 1 }).then((e) => {
      pc.setLocalDescription(e);
    });
  });
}
