
// const ZegoConf = {
//   appId: import.meta.env.VITE_ZEGO_APP_ID,
//   server: import.meta.env.VITE_ZEGO_APP_SERVER,
//   secret: import.meta.env.VITE_ZEGO_SECRET,
// };

// const zegoApp = new ZegoExpressEngine(1693229949, 'wss://webliveroom1693229949-api.coolzcloud.com/ws');

// export const ZegoProvider = {
//   async joinCall(roomID: string, userID: string, componentRef: HTMLElement, token: string) {
//     //const token = generateToken04(ZegoConf.appId, userID, ZegoConf.secret, 3600);
//     const result = await zegoApp.loginRoom(roomID, token, { userID, userName: userID }, { userUpdate: true });

//     if (result == true) {
//       const localStream = await zegoApp.createZegoStream();
//       localStream.playVideo(componentRef, { enableAutoplayDialog: true });
//       let streamID = new Date().getTime().toString();
//       return zegoApp.startPublishingStream(streamID, localStream);
//     }
//   },
//   async updateCall(roomID: string, componentRef: HTMLElement) {
//     zegoApp.on('roomStreamUpdate', async (roomID, updateType, streamList, extendedData) => {
//       if (updateType == 'ADD') {
//         const streamID = streamList[0].streamID;
//         const remoteStream = await zegoApp.startPlayingStream(streamID);
//         const remoteView = zegoApp.createRemoteStreamView(remoteStream);
//         remoteView.play(componentRef, { enableAutoplayDialog: true });
//       } else if (updateType == 'DELETE') {
//         const streamID = streamList[0].streamID;
//         zegoApp.stopPlayingStream(streamID);
//       }
//     });
//   },
// };
