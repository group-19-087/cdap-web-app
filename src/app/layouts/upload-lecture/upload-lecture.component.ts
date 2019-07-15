import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { environment } from '../../../environments/environment';
import { UploadService } from '../../services/upload.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-upload-lecture',
  templateUrl: './upload-lecture.component.html',
  styleUrls: ['./upload-lecture.component.css']
})
export class UploadLectureComponent implements OnInit {

  public videoFiles: UploadFile[] = [];
  videoFile;
  droppedVideoFile;

  public lectureMaterials: UploadFile[] = [];
  // lectureMaterial = [];
  // droppedLectureMaterial = [];

  formData;

  lectureName: string;
  lectureDescription: string;

  error: string;
  uploadResponse;

  videoDropZoneLabel: string;
  materialsDropZoneLabel: string;

  // tslint:disable-next-line:no-inferrable-types
  canExitFirstStep: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  disalbeNextButton: boolean = true;

  constructor(private uploadService: UploadService ) { }

  ngOnInit() {
    console.log('initialized');
    const id = uuid.v4();
    this.formData = new FormData();
    this.formData.append('lectureId', id);

    this.changeDropZoneLabels();
  }

  public videoDropped(event: UploadEvent) {
    this.videoFiles = event.files;

    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          this.videoFile = file;
          this.droppedVideoFile = droppedFile;

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }

    }
    this.changeDropZoneLabels();
  }

  public lectureMaterialsDropped(event: UploadEvent) {
    this.lectureMaterials = event.files;

    for (const droppedFile of event.files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.formData.append('materials', file, droppedFile.relativePath);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
    this.changeDropZoneLabels();
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  public upload() {
    console.log('uploading');

    this.formData.append('lectureName', this.lectureName);
    this.formData.append('lectureDescription', this.lectureDescription);

    this.formData.append('lecture', this.videoFile, this.droppedVideoFile.relativePath);

    this.uploadService.upload(this.formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );

    console.log(this.uploadResponse);
    console.log(this.error);

  }

  changeDropZoneLabels() {
    if (this.videoFiles.length !== 0) {
      this.videoDropZoneLabel = '';
      this.disalbeNextButton = false;
    } else {
      this.videoDropZoneLabel = 'Drag and drop your video here';
      this.disalbeNextButton = true;
    }

    if (this.lectureMaterials.length !== 0) {
      this.materialsDropZoneLabel = '';
    } else {
      this.materialsDropZoneLabel = 'Drag and drop your lecture materials here';
    }
  }

  onInputChange(lectureName: string) {
    if (lectureName !== undefined) {
      this.canExitFirstStep = true;
    } else {
      this.canExitFirstStep = false;
    }
  }

  proceedToLectureMaterialUpload() {
    if (this.videoFiles.length > 0 && this.lectureName !== undefined) {
      // TODO: CHange on form validation
      this.canExitFirstStep = true;
    } else if (this.lectureName === undefined) {
      this.canExitFirstStep = false;
      alert('Lecture name is required');
    } else {
      this.canExitFirstStep = false;
    }

  }

}
