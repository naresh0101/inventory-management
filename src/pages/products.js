import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EachProduct from '../components/eachProduct';
import DailogBox from '../components/modal';
import products from '../demodata/index.json'

const useStyles = makeStyles(theme => ({
  title : {
    fontSize : "7.586933614330874vh",
    color : "#677BF2",
    fontWeight : "bolder"
  },
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
 
}));

const Products = (props) => { 
  const classes = useStyles();
  const [data,setData] = useState(null)
  const [open,setOpen] = useState(false)
  const [ModalOpenFor, setModalOpenForm] = useState("add") 
  const [activeproduct,setActiveProduct] = useState(null) // edit or delete data store 
  const [product,setProduct] = useState(null) // create product or store dit edit value 
  
  useEffect(() => {
    setData(products) // there will be api call
    const timer = setTimeout(() => {
      // setshowSkeleton(false)
    }, 2500);

    return () => {
      clearTimeout(timer)
    };

  }, []);

  const handleAction = (item,actionType)=>{
    setActiveProduct(item)
    if(actionType === "delete"){
      showalert()
      // and some api call
      setData(data.filter((p)=> p["drug_code"] !== item["drug_code"]))
    }else{
      setOpen(true)
      setModalOpenForm('edit')
    }
 
  }
  const handleClose = (actionType)=>{
    setOpen(false)
    setActiveProduct({...activeproduct, product})
    console.log(activeproduct);
  }

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setProduct({...product,  [name]: value })
  }
  const handleExpiry = (date)=>{
    setProduct({...product,  expiry: date })
  }

  const showalert = ()=>{
    return true
  }
  
  return (
    <div  className={classes.root} >
      <EachProduct handleAction={handleAction} data={data} />

      {/* Modal here foradd and edit */}
      <DailogBox activeproduct={activeproduct} handleExpiry={handleExpiry} handleInputValues={handleInputValues} ModalOpenFor={ModalOpenFor} open={open} handleClose={handleClose}/>
    </div>
  )
}

export default Products;