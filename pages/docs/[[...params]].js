import { useRouter } from "next/router";

export default function Doc() {
    const router=useRouter();
    const {params=[]}=router.query
    console.log(params)
    if(params.length==2){
      return <div>Doc hoem page features {params[0]} and concept{params[1]}</div>
    }
    else if(params.length==1){
      return <div>Doc hoem page feautures{params[0]}</div>
    }
    return <div>Doc hoem page{params}</div>
  }