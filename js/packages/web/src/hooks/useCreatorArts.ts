import { useMeta } from '../contexts';
import { PublicKey } from '@solana/web3.js';
import { filter } from 'lodash';

export const useCreatorArts = (id?: PublicKey | string) => {
  const { metadata } = useMeta();

  // const filtered = metadata
  //   .map(m => m.info.data)
  //   .filter(a =>
  //     a.creators?.filter(c => c.address.toBase58() === id).length
  //       ? a.creators
  //       : undefined,
  //   )
  //   .map(c => c.creators)
  //   .flat(1);

  return metadata;
};
