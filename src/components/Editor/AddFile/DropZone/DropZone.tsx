import * as React from 'react';
import { observer } from 'mobx-react';
import Dropzone from 'react-dropzone'

import { homeEditorStore } from '../../../../store/HomeEditorStore';
const DropZone = observer(() => {
   return (
       <section>
           <div className="dropzone">
               <Dropzone
                   className="dragAndDrop"
                   accept=".csv, .xml, .tsv, .json, .geojson, .sf, .xlsx, .docx, .txt"
                   onDrop={(accepted, rejected) => {
                       console.log("Acc:" + accepted + " Rej:" + rejected)
                      // homeEditorStore.accepted = accepted;
                      // homeEditorStore.rejected = rejected;
                   }}>
                   {

                      /*
                       (typeof homeEditorStore.accepted[0]+homeEditorStore.rejected[0]+"" === 'undefinedundefined') ?
                           <div className="empty"><h1>Arrastra aquí para subir archivo</h1></div> :
                           (typeof homeEditorStore.accepted[0] != 'undefined') ?
                           <div className="accepted">
                               <h1>Tu base de datos ha sido cargada</h1>
                               <p><b>Name:</b> {homeEditorStore.accepted[0].name} <br/> <b>Size:</b> {homeEditorStore.accepted[0].size/1000}Kb </p>
                           </div>:
                           <div className="rejected">
                               <h1> El formato del archivo no es valido</h1>
                               <p><b>Name:</b> {homeEditorStore.rejected[0].name} <br/> <b>Size:</b> {homeEditorStore.rejected[0].size/1000}Kb </p>
                           </div>*/
                   }
               </Dropzone>
           </div>
       </section>
   )
});
export default DropZone;