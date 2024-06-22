import { ZegoExpressEngine } from 'zego-express-engine-webrtc';
import { getCached } from '../utils';
import { securityApi } from './api';

const zegoConf = {
  appId: import.meta.env.VITE_ZEGO_APP_ID,
  appServer: import.meta.env.VITE_ZEGO_APP_SERVER,
  appSecret: import.meta.env.VITE_ZEGO_SECRET,
};

const zegoApp = new ZegoExpressEngine(parseInt(zegoConf.appId), zegoConf.appServer);

export const zegoProvider = {
  async joinCall(roomId: string, componentRef: HTMLElement) {
    const userId = getCached.user().id;
    const { appId, appSecret: secret } = zegoConf;
    const {
      data: { token },
    } = await securityApi().generateToken({ appId: parseInt(appId), appSecret: secret, username: userId });
    if (!token) {
      throw Error('No token was provided');
    }

    const result = await zegoApp.loginRoom(roomId, token || '', { userID: userId, userName: userId }, { userUpdate: true });

    if (!!result) {
      console.log('login success');
      const localStream = await zegoApp.createZegoStream();
      localStream.playVideo(componentRef, { enableAutoplayDialog: true });
      let streamID = new Date().getTime().toString();
      return zegoApp.startPublishingStream(streamID, localStream);
    }
  },
  async updateCall(roomID: string, componentRef: HTMLElement) {
    zegoApp.on('roomStreamUpdate', async (roomID, updateType, streamList, extendedData) => {
      if (updateType == 'ADD') {
        const streamID = streamList[0].streamID;
        const remoteStream = await zegoApp.startPlayingStream(streamID);
        const remoteView = zegoApp.createRemoteStreamView(remoteStream);
        remoteView.play(componentRef, { enableAutoplayDialog: true });
      } else if (updateType == 'DELETE') {
        const streamID = streamList[0].streamID;
        zegoApp.stopPlayingStream(streamID);
      }
    });
  },
};
