import { BaseRecord, DataProvider, DeleteOneParams, DeleteOneResponse } from '@refinedev/core';
import { appointmentProvider } from './appointment-provider';
import { channelProvider } from './channel-provider';
import { doctorProvider } from './doctor-provider';
import { feedbackProvider } from './feedback-provider';
import { hospitalProvider } from './hospital-provider';
import { medicalInfoProvider } from './medical-info-provider';
import { messageProvider } from './messages-provider';
import { patientProvider } from './patient-provider';
import { ProviderType } from './types';

const getProvider = (resource: string): ProviderType<any, any> => {
  switch (resource) {
    case 'appointments':
      return appointmentProvider;
    case 'doctors':
      return doctorProvider;
    case 'feedbacks':
      return feedbackProvider;
    case 'hospitals':
      return hospitalProvider;
    case 'medical-info':
      return medicalInfoProvider;
    case 'patients':
      return patientProvider;
    case 'messages':
      return messageProvider;
    case 'channel':
      return channelProvider;
    default:
      throw new Error('Unknown provider');
  }
};

export const dataProvider: DataProvider = {
  getList: async function ({ resource, filters, meta = {} }) {
    const provider = getProvider(resource);
    const params: any = {};
    if (meta.by) {
      params[meta.by] = meta.id;
    }

    const data = await provider.getAllBy(params, filters);
    return {
      data,
      total: 0,
    };
  },
  getOne: async function ({ resource, id, meta = {} }) {
    const provider = getProvider(resource);
    const params: any = {};
    if (meta.by) {
      params[meta.by] = id;
    }
    const data = await provider.getOneBy(params);
    return { data };
  },
  create: async function ({ resource, variables, meta }) {
    const provider = getProvider(resource);
    const data = await provider.crupdate(meta?.id, variables, meta);
    return { data };
  },
  update: async function ({ resource, variables, meta, id }) {
    const provider = getProvider(resource);
    const data = await provider.crupdate(id as string, variables, meta);
    return { data };
  },
  deleteOne: function <TData extends BaseRecord = BaseRecord, TVariables = {}>(params: DeleteOneParams<TVariables>): Promise<DeleteOneResponse<TData>> {
    throw new Error('Function not implemented.');
  },
  getApiUrl: function (): string {
    throw new Error('Function not implemented.');
  },
};
