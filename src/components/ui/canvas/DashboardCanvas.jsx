import React, {useState} from 'react';
import {Layer, Stage} from "react-konva";
import Dragable from "./Dragable";
import WarehouseMapEditor from "./Dragable";

const DashboardCanvas = () => {

    return (
        <div>
            <WarehouseMapEditor />
            
        </div>
    );
};

export default DashboardCanvas;