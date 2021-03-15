import { someFunction, SomeType } from '@playground/shared';

export class Usage implements SomeType {
    value: string = 'actual usage';
}

export let applicationLogic = () => {
    return someFunction(7, 'seven');
};

const aFunctionWithAnArgumentFromTheSharedPackage = (one:number, two:string, three: SomeType) => {

}
