import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerCurrentTimeService } from '../../services/player-current-time.service';
import { VideoPlayerComponent } from '../../component/video-player/video-player.component';

@Component({
  selector: 'app-video-playback',
  templateUrl: './video-playback.component.html',
  styleUrls: ['./video-playback.component.css']
})
export class VideoPlaybackComponent implements OnInit {
  @ViewChild(VideoPlayerComponent) player;

  src = 'assets/gravity_falls_opening.mp4';

  currentTime: any;

  private _opened = false;

  topics = [{topic: 'Topic 1', time: 1},
            {topic: 'Topic 2', time: 10},
            {topic: 'Topic 3', time: 20}];

  selected = this.topics[0]

  constructor(private currentTimeService: PlayerCurrentTimeService) { }

  ngOnInit() {
    this.currentTimeService.currentTime.subscribe(time => {
      this.currentTime = time;

    });
  }

  seekVideo(time) {
    this.player.seekVideo(time);
  }

  toggleSidebar() {
    this._opened = !this._opened;
  }



  // onPlayerReady(api: VgAPI) {
  //   this.api = api;

  //   this.api.getDefaultMedia().subscriptions.pause.subscribe(() => {
  //     console.log('paused');
  //   });

  //   this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe((data) => {
  //     console.log(data.srcElement.currentTime);
  //     if (Math.floor(data.srcElement.currentTime) === 5) {
  //       // console.log('current time fired');
  //       this.api.getDefaultMedia().pause();
  //     }
  //   });
  // }

}
