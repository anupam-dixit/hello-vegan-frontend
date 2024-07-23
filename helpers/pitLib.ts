import nuxtStorage from "nuxt-storage/nuxt-storage";
import Swal from "sweetalert2";
import {env} from "./env";
import {getToken} from "@firebase/messaging";

export const pitLib={
    auth:{
        get:function () {
            return nuxtStorage.localStorage.getData(env.KEYWORDS.USER_SESSION_KEY)
        },
        set:function (data:any) {
            return nuxtStorage.localStorage.setData(env.KEYWORDS.USER_SESSION_KEY,data,env.SES_LOGIN_EXPIRY_DAYS,'d')
        },
        clear:function () {
            return nuxtStorage.localStorage.removeItem(env.KEYWORDS.USER_SESSION_KEY)
        },
        is:function () {
            return !!nuxtStorage.localStorage.getData(env.KEYWORDS.USER_SESSION_KEY)
        },
    },
    response:{
        send:function (status:boolean|null=null,message:string|null=null,data:any=null) {
            if (!status){
                status =false;
                if (!message){
                    message ='Unable to perform this action'
                }
            } else {
                status =true;
                if (!message){
                    message ='Action performed successfully'
                }
            }
            return {status:status,message:message,data:data}
        },
    },
    swal:async function (title:null|string|undefined,icon:'info'|'success'|'error'|'warning'|'question'|null,position:null|'bottom-right',timer:null|number) {
        if(!position){
            position='bottom-right'
        }
        if(!title&&icon){
            if (['warning','error'].includes(icon)){
                title=Env.MESSAGE.NEGATIVE
            }
            if (['info','success'].includes(icon)){
                title=Env.MESSAGE.POSITIVE
            }
        }
        timer=timer??5000
        return await Swal.fire({
            position: position,
            icon: icon,
            title: title,
            showConfirmButton:false,
            timerProgressBar:true,
            timer: timer
        })
    },
    util:{
        test:function (){
            alert("ok")
        }
    },
    media:{
        getBase64: file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        })
    },
    fcmToken:async function (messaging) {
        try {
            const currentToken = await getToken(messaging, { vapidKey: 'BBxc23p9Ond5HWi5Jl829qdWfYyT6ygAun0cZLhClIrbzH63j' });
            if (currentToken) {
                console.log('Current token for client: ', currentToken);
                return currentToken;
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        } catch (error) {
            console.error('An error occurred while retrieving token. ', error);
        }
    }

}