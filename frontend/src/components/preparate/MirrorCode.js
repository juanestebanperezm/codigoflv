//Paquetes

import React, { useEffect, useState, useRef } from "react";

import { Button, Box, TextField } from "@mui/material";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";

function MirrorCode() {
  const onChange = (newValue) => {
    console.log("change", newValue);
  };
  return (
    <Box
      component="form"
      sx={{
      
      }}
      noValidate
      autoComplete="off"
    >
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="blah2"
        fontSize={20}
        onChange={onChange}
        editorProps={{ $blockScrolling: true }}
      />
      <Button type="submit">
        Enviar solucion
      </Button>
      
    </Box>
  );
}

export default MirrorCode;
