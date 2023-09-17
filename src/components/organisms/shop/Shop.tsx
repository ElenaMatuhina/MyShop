import React, { useEffect } from "react";
import { Preloader } from '../../atoms/Preloader';
import { goodsLoading } from '../../../reducers/good-slice';
import { useAppDispatch } from '../../../store';
import { useSelectorTyped } from "../../../store";
import { GoodSection } from "../sections/GoodSection/GoodSection";

const Shop = () => {
  const { status, error } = useSelectorTyped(({ goodsList }) => goodsList);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    dispatch(goodsLoading());
  }, [dispatch]);


  return (
    <>
      {error && <h2>Error</h2>}
      {status === 'loading' && <Preloader />}
      {status ==='recieved' && <GoodSection/>}
    </>
  )
}

export {Shop}

