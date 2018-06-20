import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { Page } from "ui/page";
import * as camera from "nativescript-camera";
import * as imagepicker from "nativescript-imagepicker";
import * as dialogs from "ui/dialogs";
import { Image } from "ui/image";
import * as fs from "tns-core-modules/file-system"
import * as imageScoure from "tns-core-modules/image-source";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";


 


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit, AfterViewInit {  

    @ViewChild("img") private image1 : any;


    aImageAsset: ImageAsset;

    constructor(private page: Page) { 
        this.page.actionBarHidden = true;
        
       
        
    }

    ngAfterViewInit() {
    

        /*
        let documents = fs.knownFolders.documents();
        let path = fs.path.join(documents.path, "pic.png");
        console.log("image -> " + path);  
        let imageFinal : Image = this.image1.nativeElement;
        
        imageFinal.src = path; */
        
      } 
   
    ngOnInit(): void {
        // Init your component properties here.
    }

   

    openDialogSel(): void{

        dialogs.action({
            message: "Seleccionar foto",
            cancelButtonText: "Cancelar",
            actions: ["Galeria", "Camara"]
        }).then(result => {
            console.log("Dialog result: " + result);
            if(result == "Galeria"){
                this.openPicketPicture() // buscando la foto desde la galeria
            }else if(result == "Camara"){
                this.openCamera() //abrimos la camara
            }
        });

       
        
    } 


    openCamera(): void{
        camera.requestPermissions();
        

        if(camera != null)  //si el permiso esta permitido
        {
            var imageModule = require("ui/image");
            let self = this;
            camera.takePicture()   
            .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new imageModule.Image();
                let documents = fs.knownFolders.documents();
                let path = fs.path.join(documents.path, "pic.png");
                imageScoure.fromAsset(imageAsset)
                    .then(imageSource => {
                        imageSource.saveToFile(path, "png");
                        var image:Image = <Image> self.page.getViewById("imageId");
                        console.log("self=>"+self);
                        console.log("page=>"+self.page);
                        image.src = path;
                    });
               
  
            }).catch(function (err) { 
                console.log("Error -> " + err.message);  
            });

            
        }

        
    }

    openPicketPicture(){
        let context = imagepicker.create({
            mode: "single" 
        });

        context
        .authorize()
        .then(function() {
            return context.present();
        })
        .then(function(selection) {
            selection.forEach(function(selected) {
                // process the selected image
            });
      //      list.items = selection;
        }).catch(function (e) {
            // process error
        });
    }
}
