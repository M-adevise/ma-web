export interface ProviderType<T, B> {
  getAllBy: (params: Record<`${string}Id`, string>) => Promise<T[]>;
  getOneBy: (params: Record<`${string}Id`, string>) => Promise<T>;
  crupdate: (id: string, body: B, params?: Record<string, any>) => Promise<T>;
  crupdateAll?: (body: B[]) => Promise<T[]>;
}
