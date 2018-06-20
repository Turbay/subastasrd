"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var camera = require("nativescript-camera");
var imagepicker = require("nativescript-imagepicker");
var dialogs = require("ui/dialogs");
var fs = require("tns-core-modules/file-system");
var imageScoure = require("tns-core-modules/image-source");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        this.page = page;
        this.page.actionBarHidden = true;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        /*
        let documents = fs.knownFolders.documents();
        let path = fs.path.join(documents.path, "pic.png");
        console.log("image -> " + path);
        let imageFinal : Image = this.image1.nativeElement;
        
        imageFinal.src = path; */
    };
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.openDialogSel = function () {
        var _this = this;
        dialogs.action({
            message: "Seleccionar foto",
            cancelButtonText: "Cancelar",
            actions: ["Galeria", "Camara"]
        }).then(function (result) {
            console.log("Dialog result: " + result);
            if (result == "Galeria") {
                _this.openPicketPicture(); // buscando la foto desde la galeria
            }
            else if (result == "Camara") {
                _this.openCamera(); //abrimos la camara
            }
        });
    };
    HomeComponent.prototype.openCamera = function () {
        camera.requestPermissions();
        if (camera != null) {
            var imageModule = require("ui/image");
            var self_1 = this;
            camera.takePicture()
                .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new imageModule.Image();
                var documents = fs.knownFolders.documents();
                var path = fs.path.join(documents.path, "pic.png");
                imageScoure.fromAsset(imageAsset)
                    .then(function (imageSource) {
                    imageSource.saveToFile(path, "png");
                    var image = self_1.page.getViewById("imageId");
                    console.log("self=>" + self_1);
                    console.log("page=>" + self_1.page);
                    image.src = path;
                });
            }).catch(function (err) {
                console.log("Error -> " + err.message);
            });
        }
    };
    HomeComponent.prototype.openPicketPicture = function () {
        var context = imagepicker.create({
            mode: "single"
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                // process the selected image
            });
            //      list.items = selection;
        }).catch(function (e) {
            // process error
        });
    };
    __decorate([
        core_1.ViewChild("img"),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "image1", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUN4RixnQ0FBK0I7QUFDL0IsNENBQThDO0FBQzlDLHNEQUF3RDtBQUN4RCxvQ0FBc0M7QUFFdEMsaURBQWtEO0FBQ2xELDJEQUE2RDtBQWE3RDtJQU9JLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFJckMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFHSTs7Ozs7O2lDQU15QjtJQUUzQixDQUFDO0lBRUgsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBSUQscUNBQWEsR0FBYjtRQUFBLGlCQWlCQztRQWZHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxPQUFPLEVBQUUsa0JBQWtCO1lBQzNCLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztTQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDeEMsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBLENBQUMsb0NBQW9DO1lBQ2pFLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLG1CQUFtQjtZQUN6QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFJUCxDQUFDO0lBR0Qsa0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRzVCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FDbEIsQ0FBQztZQUNHLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxJQUFJLE1BQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLFdBQVcsRUFBRTtpQkFDbkIsSUFBSSxDQUFDLFVBQVUsVUFBVTtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7cUJBQzVCLElBQUksQ0FBQyxVQUFBLFdBQVc7b0JBQ2IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3BDLElBQUksS0FBSyxHQUFpQixNQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsTUFBSSxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLE1BQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBR1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBR1AsQ0FBQztJQUdMLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUMsQ0FBQztRQUVILE9BQU87YUFDTixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFTLFNBQVM7WUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFTLFFBQVE7Z0JBQy9CLDZCQUE2QjtZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNULCtCQUErQjtRQUM3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2hCLGdCQUFnQjtRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2R2lCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDOztpREFBc0I7SUFGOUIsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FRNEIsV0FBSTtPQVByQixhQUFhLENBMEd6QjtJQUFELG9CQUFDO0NBQUEsQUExR0QsSUEwR0M7QUExR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIlxyXG5pbXBvcnQgKiBhcyBpbWFnZVNjb3VyZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0L2ltYWdlLWFzc2V0XCI7XHJcblxyXG5cclxuIFxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyAgT25Jbml0LCBBZnRlclZpZXdJbml0IHsgIFxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJpbWdcIikgcHJpdmF0ZSBpbWFnZTEgOiBhbnk7XHJcblxyXG5cclxuICAgIGFJbWFnZUFzc2V0OiBJbWFnZUFzc2V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyBcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIFxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcbiAgICAgICAgbGV0IHBhdGggPSBmcy5wYXRoLmpvaW4oZG9jdW1lbnRzLnBhdGgsIFwicGljLnBuZ1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlIC0+IFwiICsgcGF0aCk7ICBcclxuICAgICAgICBsZXQgaW1hZ2VGaW5hbCA6IEltYWdlID0gdGhpcy5pbWFnZTEubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBpbWFnZUZpbmFsLnNyYyA9IHBhdGg7ICovXHJcbiAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBvcGVuRGlhbG9nU2VsKCk6IHZvaWR7XHJcblxyXG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTZWxlY2Npb25hciBmb3RvXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcclxuICAgICAgICAgICAgYWN0aW9uczogW1wiR2FsZXJpYVwiLCBcIkNhbWFyYVwiXVxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBcIkdhbGVyaWFcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5QaWNrZXRQaWN0dXJlKCkgLy8gYnVzY2FuZG8gbGEgZm90byBkZXNkZSBsYSBnYWxlcmlhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PSBcIkNhbWFyYVwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkNhbWVyYSgpIC8vYWJyaW1vcyBsYSBjYW1hcmFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSBcclxuXHJcblxyXG4gICAgb3BlbkNhbWVyYSgpOiB2b2lke1xyXG4gICAgICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoY2FtZXJhICE9IG51bGwpICAvL3NpIGVsIHBlcm1pc28gZXN0YSBwZXJtaXRpZG9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9pbWFnZVwiKTtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUoKSAgIFxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaW1hZ2VBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgaXMgYW4gaW1hZ2UgYXNzZXQgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgaW1hZ2VNb2R1bGUuSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IGZzLnBhdGguam9pbihkb2N1bWVudHMucGF0aCwgXCJwaWMucG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VTY291cmUuZnJvbUFzc2V0KGltYWdlQXNzZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZS5zYXZlVG9GaWxlKHBhdGgsIFwicG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2U6SW1hZ2UgPSA8SW1hZ2U+IHNlbGYucGFnZS5nZXRWaWV3QnlJZChcImltYWdlSWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZj0+XCIrc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFnZT0+XCIrc2VsZi5wYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcGF0aDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpOyAgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUGlja2V0UGljdHVyZSgpe1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIiBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29udGV4dFxyXG4gICAgICAgIC5hdXRob3JpemUoKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbihzZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHNlbGVjdGVkIGltYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAvLyAgICAgIGxpc3QuaXRlbXMgPSBzZWxlY3Rpb247XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8gcHJvY2VzcyBlcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==