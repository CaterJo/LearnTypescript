{
    /**
     * Unioon Types
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    const move = (direction: Direction) => {
        console.log(direction)
    }

    move('down');

    type TitleSize = 8 | 16 | 32;
    const title: TitleSize = 16;


    // function login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailStatus = {
        reason: string;
    }

    type LoginState = SuccessState | FailStatus;

    const  login = (id: string, password:string): LoginState =>{
        return {
            response:{
                body: ''
            }
        }
    }

    const printLoginState = (state: LoginState) => {
        if('response' in state ){
            console.log('S')
        }else{
            console.log('F')
        }
    }
}