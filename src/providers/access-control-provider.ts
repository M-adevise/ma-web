import { AccessControlProvider } from '@refinedev/core';

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params }) => {
    if (action === 'list' && resource === 'inbox') {
      return { can: false };
    }

    return {
      can: true,
    };
  },
};
