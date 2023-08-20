import { IFS } from './fs';
export interface IUnionFs extends IFS {
    use(fs: IFS): this;
}
export declare const Union: new () => IUnionFs;
export declare const ufs: IUnionFs;
export default ufs;
export { IFS };
