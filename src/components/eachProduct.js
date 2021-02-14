
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';

import "./index.scss"
import Hamburger from './hamburger';

const useStyles = makeStyles((theme) => ({

  column: {
    fontWeight: 500,
    fontSize: "14px",
    color: "#5A5E70",
  },
  columnValue: {
    fontWeight: 500,
    fontSize: "14px",
    color: "#5A5E70",
  },
  card: {
    boxShadow: "none",
    marginTop: "2rem",
    borderRadius: "10px"
  },
  grid6: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)'
  }
}));

const EachProduct = (props) => {
  const classes = useStyles();
  const {data,handleAction} = props

  return (
    <div>
      <div style={{ padding: "10px" }} className={classes.grid6}>
        <Typography className={classes.column}>Drug code</Typography>
        <Typography className={classes.column}>Batch no.</Typography>
        <Typography className={classes.column}>Price</Typography>
        <Typography className={classes.column}>Expiry date</Typography>
        <Typography className={classes.column}>Fcomp</Typography>
        <Typography ></Typography>
      </div>
      {
        data?.map((product, _i) => {
          return (
            <Card className={classes.card} key={_i}>
              <CardContent className={classes.grid6}>
                <Typography className={classes.columnValue}>{product["drug_code"]}</Typography>
                <Typography className={classes.columnValue}>{product["batch_number"]}</Typography>
                <Typography className={classes.columnValue}>{product["MRP"]}</Typography>
                <Typography className={classes.columnValue}>12/01/2020</Typography>
                <Typography className={classes.columnValue}>{product["f_comp"]} </Typography>
                <Typography className={classes.columnValue}>
                  <Hamburger handleAction={handleAction} product={product} iconType={<MoreVertIcon style={{ margin: "0" }} />} actionItem={null} />
                </Typography>
              </CardContent>
            </Card>
          )
        })
      }
    </div>
  );
}
export default EachProduct;
