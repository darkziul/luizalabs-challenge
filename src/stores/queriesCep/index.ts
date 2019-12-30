/**
 *  Duck Pattern
 */


 //types action
export const TYPES = {
    FAILURE         : 'queriesCep/FAILURE',
    SUCCESS         : 'queriesCep/SUCCESS',
    REQUEST         : 'queriesCep/REQUEST',
    REMOVE_DATA     : 'queriesCep/REMOVE_DATA',
};




//actions
export const searchCep = (cep:string):Action => ({
    type: TYPES.REQUEST,
    payload: cep,
});
export const removeData = ():Action =>({
    type: TYPES.REMOVE_DATA
});


//reducer
const INITIAL_STATE:Result  = {
    data: null,
    loading: false,
    error: false,
};
const reducer = (state:Result = INITIAL_STATE, action:any) => {
    
        switch (action.type) {
            case TYPES.REQUEST:
                return {...state, loading:true, error:false};
            case TYPES.SUCCESS:
                return {error:false, loading:false, data: action.payload};
            case TYPES.FAILURE:
                return {...state, loading:false, error: action.payload};
            case TYPES.REMOVE_DATA:
                return {...state, data: null }
            default:
                return state;
        }
};

export default reducer;








//@types
export type Result = {
    data: any;
    loading:boolean;
    error: string|boolean;
};
export type Action = {
    type:string;
    payload?: any;
};
export type ViaCep = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
    mapa?:string;
    erro?:boolean;
  };