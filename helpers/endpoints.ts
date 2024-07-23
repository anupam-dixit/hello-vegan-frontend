import {env} from "~/helpers/env";

export const endpoints={
    user:{
        list:env.ENDPOINT+'user/list',
        login:env.ENDPOINT+'user/login',
        create:env.ENDPOINT+'user/create',
    },
    veganlog:{
        create:env.ENDPOINT+'veganpost/create',
        index:env.ENDPOINT+'veganpost/index',
        update:env.ENDPOINT+'veganpost/update',
    }
}