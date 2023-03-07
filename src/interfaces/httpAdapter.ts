export interface httpAdapter {
  getRequest<T>(ud: number): Promise<T>;
}
