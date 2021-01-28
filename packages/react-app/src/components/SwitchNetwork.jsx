import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogContentText } from "@material-ui/core";

export const SwitchNetwork = () => (
    <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Please Switch Network</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please switch to Rinkeby in order to use the NFette app
            </DialogContentText>
        </DialogContent>
    </Dialog>
)
