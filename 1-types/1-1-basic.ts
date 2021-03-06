{
    /* 
    * JavaScript
    * Primitive: number, string, boolean, bigint, symbol, null, undefined 
    * Object: function, array...
   */

    //number
    const num: number  = -6;

    //string
    const str: string = 'hello';

    //boolean
    const boal: boolean = false;

    //undefined
    let name: undefined; // π©  
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
       /*  return 1; */
    }

    //null
    let person: null; // π©
    let person2: string | null;

    //unknown // π©
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    notSure = 3;


    // any // π©
    let anything: any = 0;
    anything = 'hello';
    anything = undefined;

    //void : νμ λͺμ μλ΅ κ°λ₯, μλ¬΄κ²λ return ν΄μ£Όμ§ μμλ
    function print() : void {
        console.log('hey')
        return;
    }

    let unusable: void = undefined; // π© 
    

    //never : μλ¬ λμ§λ return; μ λ μ¬μ©νμ§ μκ³  μλ¬λμ§λ, whileλ¬Έμμ μ¬μ©κ°λ₯
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
       /*  while(true) {

        } */
    }
    let neverEnding: never; // π©

    //object
    let obj: object = [1,2]; // π©
    function acceptSomeObject(obj: object) {
        acceptSomeObject({ name: 'elle'});
        acceptSomeObject({ animal: 'dog'});
    }

    
}