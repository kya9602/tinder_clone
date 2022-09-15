import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getList } from "../../redux/modules/member";


const MemberList = () => {
    const dispatch = useDispatch();
    //const { error, post } = useSelector((state) => state);

    useEffect(()=>{
        dispatch(__getList());
    },[dispatch])

    return(
        <div>
            abc
        </div>

    )
}

export default MemberList;