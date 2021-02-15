import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EachProduct from '../components/eachProduct';
import DailogBox from '../components/modal';
import PageHeader from '../components/pageHeader';
import  products from "../demodata/index.json";

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
const initialValues = {
  batch_number: "",
  drug_code: "",
  f_comp: "",
  MRP: "",
  expiry:new Date()
}
const Products = (props) => { 
  const classes = useStyles();
  const [formValues, setFormValues] = useState(initialValues);
  const [data,setData] = useState(null)
  const [open,setOpen] = useState(false)
  const [ModalOpenFor, setModalOpenForm] = useState("add") 
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
    setFormValues(item)
    if(actionType === "add"){
      setOpen(true)
    } if(actionType === "delete"){
      showalert()
      // and some api call
      setData(data.filter((p)=> p["drug_code"] !== item["drug_code"]))
    }else{
      setOpen(true)
      setModalOpenForm('edit')
    }
 
  }
  const handleAdd = ()=>{
    setOpen(true)
  }
  const handleFormData = (actionType)=>{
    setOpen(false)
    setModalOpenForm('add')
    setProduct({...product, ["drug_code"]:data.length + 1})
    setData([...data, product])
  }

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setProduct({...product,  [name]: value })
  }
  const handleExpiry = (date)=>{
    setFormValues({
      ...formValues,
      expiry: date,
    })  
  }

  const showalert = ()=>{
    return true
  }

  const searchProduct = (value)=>{
    if(value != "" || value != null){
      setData(
        products.filter(p=>  p["drug_code"]  == value ||  p["batch_number"]  == value  )
      )
    }else{
      alert("hi");
      // setDate(products)
    }
  }

  
  return (
    <div  className={classes.root} >
      <PageHeader searchProduct={searchProduct}  handleAdd={handleAdd}/>
      <EachProduct handleAction={handleAction} data={data}/>
      {/* Modal here foradd and edit */}
      <DailogBox 
      formValues={formValues} 
      handleExpiry={handleExpiry} 
      handleInputValues={handleInputValues} 
      ModalOpenFor={ModalOpenFor} 
      open={open} 
      handleClose={handleFormData}/>
    </div>
  )
}

export default Products;