export interface httpAdapter {
  getRequest<T>(id: number): Promise<T>;
}
