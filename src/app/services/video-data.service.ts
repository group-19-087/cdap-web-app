import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const videos = [
  {
    id: '6f27ec0f-2046-473e-85c1-88183d2956c9',
    src: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/2018-OOC-Lecture-05.mp4',
    videoTitle: 'OOC Lecture 05',
    description: '2018 Object Oreiented Concepts Lecture 05',
    duration: '00:59:09',
    thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec5-thumbnail.jpg',
    code: [
      {
        title: 'Student.cpp',
        lines: [
          {
            content: '#include <iostream>',
            timestamp: '0:04:25',
            seconds: 265
          },
          {
            content: 'class Student {',
            timestamp: '0:31:45',
            seconds: 1905
          },
          {
            content: 'private:',
            timestamp: '0:07:15',
            seconds: 435
          },
          {
            content: 'int studentNo;',
            timestamp: '0:31:55',
            seconds: 1915
          },
          {
            content: 'int marks1;',
            timestamp: '0:32:00',
            seconds: 1920
          },
          {
            content: 'int marks2;',
            timestamp: '0:32:00',
            seconds: 1920
          },
          {
            content: 'int marks3;',
            timestamp: '0:32:05',
            seconds: 1925
          },
          {
            content: 'public:',
            timestamp: '0:07:00',
            seconds: 420
          },
          {
            content: 'void setStudentNo(int no);',
            timestamp: '0:35:00',
            seconds: 2100
          },
          {
            content: 'void assignMarks(int mrk1, int mrk2, int mrk3);',
            timestamp: '0:34:20',
            seconds: 2060
          },
          {
            content: 'float calcAvg();',
            timestamp: '0:53:45',
            seconds: 3225
          },
          {
            content: 'void Student::setStudentNo(int no) {',
            timestamp: '0:36:20',
            seconds: 2180
          },
          {
            content: 'studentNo = no;',
            timestamp: '0:35:55',
            seconds: 2155
          },
          {
            content: 'void Student::assignMarks(int mrk1, int mrk2, int mrk3) {',
            timestamp: '0:37:10',
            seconds: 2230
          },
          {
            content: 'marks1 = mrk1;',
            timestamp: '0:58:25',
            seconds: 3505
          },
          {
            content: 'marks2 = mrk2;',
            timestamp: '0:58:25',
            seconds: 3505
          },
          {
            content: 'marks3 = mrk3;',
            timestamp: '0:58:25',
            seconds: 3505
          },
          {
            content: 'float calcAvg() {',
            timestamp: '0:53:45',
            seconds: 3225
          },
          {
            content: 'float avg = (marks1+marks2+marks3)/3.0;',
            timestamp: '0:58:25',
            seconds: 3505
          },
          {
            content: 'return avg;',
            timestamp: '0:58:50',
            seconds: 3530
          },
          {
            content: 'using namespace std;',
            timestamp: '0:53:00',
            seconds: 3180
          },
          {
            content: 'int main() {',
            timestamp: '0:35:40',
            seconds: 2140
          },
          {
            content: 'Student std1, std2;',
            timestamp: '0:58:50',
            seconds: 3530
          },
          {
            content: 'std1.setStudentNo(100);',
            timestamp: '0:59:00',
            seconds: 3540
          },
          {
            content: 'std1.assignMarks(50, 60, 70);',
            timestamp: '0:56:25',
            seconds: 3385
          },
          {
            content: 'cout << "Average of student 1 = " << std1.calcAvg()',
            timestamp: '0:57:45',
            seconds: 3465
          },
          {
            content: '<< endl;',
            timestamp: '0:57:35',
            seconds: 3455
          },
          {
            content: 'return 0;',
            timestamp: '0:53:00',
            seconds: 3180
          }
        ]
      },
      {
        title: 'Rectangle.cpp',
        lines: [
          {
            content: '#include <iostream>',
            timestamp: '0:04:25',
            seconds: 265
          },
          {
            content: 'class Rectangle {',
            timestamp: '0:04:50',
            seconds: 290
          },
          {
            content: 'private:',
            timestamp: '0:07:15',
            seconds: 435
          },
          {
            content: 'int length;',
            timestamp: '0:07:15',
            seconds: 435
          },
          {
            content: 'int width;',
            timestamp: '0:07:15',
            seconds: 435
          },
          {
            content: 'public:',
            timestamp: '0:07:00',
            seconds: 420
          },
          {
            content: 'void setWidth(int no);',
            timestamp: '0:09:35',
            seconds: 575
          },
          {
            content: 'void setLength(int no);',
            timestamp: '0:09:35',
            seconds: 575
          },
          {
            content: 'int calcArea();',
            timestamp: '0:11:00',
            seconds: 660
          },
          {
            content: 'void Rectangle::setWidth(int no) {',
            timestamp: '0:16:10',
            seconds: 970
          },
          {
            content: 'width = no;',
            timestamp: '0:16:10',
            seconds: 970
          },
          {
            content: 'void Rectangle::setLength(int no) {',
            timestamp: '0:18:15',
            seconds: 1095
          },
          {
            content: 'length = no;',
            timestamp: '0:16:10',
            seconds: 970
          },
          {
            content: 'int Rectangle::calcArea() {',
            timestamp: '0:18:15',
            seconds: 1095
          },
          {
            content: 'int area = length * width;',
            timestamp: '0:18:15',
            seconds: 1095
          },
          {
            content: 'return area;',
            timestamp: '0:18:15',
            seconds: 1095
          },
          {
            content: 'using namespace std;',
            timestamp: '0:53:00',
            seconds: 3180
          },
          {
            content: 'int main() {',
            timestamp: '0:35:40',
            seconds: 2140
          },
          {
            content: 'int no1, no2;',
            timestamp: '0:41:20',
            seconds: 2480
          },
          {
            content: 'Rectangle rect1, rect2;',
            timestamp: '0:41:50',
            seconds: 2510
          },
          {
            content: 'rect1.setLength(10);',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'rect1.setWidth(5);',
            timestamp: '0:48:35',
            seconds: 2915
          },
          {
            content: 'rect2.setLength(20);',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'rect2.setWidth(10);',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'cout << "Area of rectangle 1 = " <<',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'rect1.calcArea() << endl;',
            timestamp: '0:43:55',
            seconds: 2635
          },
          {
            content: 'cout << "Area of rectangle 2 = " <<',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'rect2.calcArea() << endl;',
            timestamp: '0:44:25',
            seconds: 2665
          }
        ]
      }
   ],
    topics: [
      {
        title: 'Public and Private attributes',
        time: '00:02:33'
      },
      {
        title: 'Activity 1',
        time: '00:19:31'
      },
      {
        title: 'Creating Objects',
        time: '00:38:19'
      }
    ],
    questions: {
      count: 4,
      questions: [
        {
          questionNo: 1,
          questionBody: 'Which was the first object oriented programming language developed?',
          answers: [
            {
              id: 'java',
              value: 'Java',
              correct: false
            },
            {
              id: 'c++',
              value: 'C++',
              correct: false
            },
            {
              id: 'smalltalk',
              value: 'SmallTalk',
              correct: true
            },
            {
              id: 'kotlin',
              value: 'Kotlin',
              correct: false
            }
          ]
        },
        {
          questionNo: 2,
          questionBody: '2Which was the first object oriented programming language developed?',
          answers: [
            {
              id: 'java',
              value: 'Java',
              correct: false
            },
            {
              id: 'c++',
              value: 'C++',
              correct: false
            },
            {
              id: 'smalltalk',
              value: 'SmallTalk',
              correct: true
            },
            {
              id: 'kotlin',
              value: 'Kotlin',
              correct: false
            }
          ]
        },
        {
          questionNo: 3,
          questionBody: '3Which was the first object oriented programming language developed?',
          answers: [
            {
              id: 'java',
              value: 'Java',
              correct: false
            },
            {
              id: 'c++',
              value: 'C++',
              correct: false
            },
            {
              id: 'smalltalk',
              value: 'SmallTalk',
              correct: true
            },
            {
              id: 'kotlin',
              value: 'Kotlin',
              correct: false
            }
          ]
        },
        {
          questionNo: 4,
          questionBody: '4Which was the first object oriented programming language developed?',
          answers: [
            {
              id: 'java',
              value: 'Java',
              correct: false
            },
            {
              id: 'c++',
              value: 'C++',
              correct: false
            },
            {
              id: 'smalltalk',
              value: 'SmallTalk',
              correct: true
            },
            {
              id: 'kotlin',
              value: 'Kotlin',
              correct: false
            }
          ]
        },
      ]
    }
  },
  {
    id: '220131b0-06ba-4353-bd01-fefed272a161',
    src: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/2018-OOC-Lecture-06.mp4',
    videoTitle: 'OOC Lecture 06',
    description: '2018 Object Oriented Concepts Lecture 06',
    duration: '01:01:11',
    thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec6-thumbnail.jpg',
    code: [
      {
        title: 'StopWatch.cpp',
        lines: [
          {
            content: '#include <iostream>',
            timestamp: '0:20:05',
            seconds: 1205
          },
          {
            content: 'int StopWatch::getMinute() {',
            timestamp: '0:24:30',
            seconds: 1470
          },
          {
            content: 'return minute;',
            timestamp: '0:21:50',
            seconds: 1310
          },
          {
            content: 'void StopWatch::setMinute(int min) {',
            timestamp: '0:24:30',
            seconds: 1470
          },
          {
            content: 'minute = min;',
            timestamp: '0:24:30',
            seconds: 1470
          },
          {
            content: 'void StopWatch::setMinute(int min) {',
            timestamp: '0:24:30',
            seconds: 1470
          },
          {
            content: 'if (min >= 0 && min <= 59)',
            timestamp: '0:24:30',
            seconds: 1470
          },
          {
            content: 'minute = min;',
            timestamp: '0:24:30',
            seconds: 1470
          },
          {
            content: 'else',
            timestamp: '0:10:15',
            seconds: 615
          },
          {
            content: 'minute = 0;',
            timestamp: '0:24:30',
            seconds: 1470
          },
          {
            content: 'int main() {',
            timestamp: '0:04:20',
            seconds: 260
          },
          {
            content: 'std::cout << "Hello world\\n" << endl;',
            timestamp: '0:45:05',
            seconds: 2705
          }
        ]
      },
      {
        title: 'Time.cpp',
        lines: [
          {
            content: '#include <iostream>',
            timestamp: '0:20:05',
            seconds: 1205
          },
          {
            content: 'class Time {',
            timestamp: '0:43:55',
            seconds: 2635
          },
          {
            content: 'private:',
            timestamp: '0:03:35',
            seconds: 215
          },
          {
            content: 'int hour;',
            timestamp: '0:43:55',
            seconds: 2635
          },
          {
            content: 'int minute;',
            timestamp: '0:24:25',
            seconds: 1465
          },
          {
            content: 'int second;',
            timestamp: '0:24:25',
            seconds: 1465
          },
          {
            content: 'public:',
            timestamp: '0:01:40',
            seconds: 100
          },
          {
            content: 'void setTime(int h, int m, int s);',
            timestamp: '0:43:55',
            seconds: 2635
          },
          {
            content: 'void printTimeUniversal();',
            timestamp: '0:43:55',
            seconds: 2635
          },
          {
            content: 'void printTimestandard();',
            timestamp: '0:43:55',
            seconds: 2635
          },
          {
            content: 'void Time::setTime(int h, int m, int s) {',
            timestamp: '0:41:05',
            seconds: 2465
          },
          {
            content: 'hour = h;',
            timestamp: '0:49:25',
            seconds: 2965
          },
          {
            content: 'minute = m;',
            timestamp: '0:49:25',
            seconds: 2965
          },
          {
            content: 'second = s;',
            timestamp: '0:49:25',
            seconds: 2965
          },
          {
            content: 'void Time::printTimeUniversal() {',
            timestamp: '0:45:05',
            seconds: 2705
          },
          {
            content: 'cout << hour << ":" << minute << ":"',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: '<< second << endl;',
            timestamp: '0:44:40',
            seconds: 2680
          },
          {
            content: 'void Time::printTimestandard() {',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'if (hour > 12) {',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'cout << (hour-12) << ":" << minute << ":"',
            timestamp: '0:46:20',
            seconds: 2780
          },
          {
            content: '<< second " PM" << endl;',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'else {',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'cout << hour << ":" << minute << ":"',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: '<< second << " AM" << endl;',
            timestamp: '0:48:20',
            seconds: 2900
          },
          {
            content: 'int main() {',
            timestamp: '0:04:20',
            seconds: 260
          },
          {
            content: 'Time myTime;',
            timestamp: '0:56:25',
            seconds: 3385
          },
          {
            content: 'int hrs, min, sec;',
            timestamp: '0:55:50',
            seconds: 3350
          },
          {
            content: 'cout << "Enter Hour ";',
            timestamp: '0:56:25',
            seconds: 3385
          },
          {
            content: 'cin >> hrs;',
            timestamp: '0:56:25',
            seconds: 3385
          },
          {
            content: 'cout << "Enter Minute ";',
            timestamp: '0:56:25',
            seconds: 3385
          },
          {
            content: 'cin >> min;',
            timestamp: '0:56:25',
            seconds: 3385
          },
          {
            content: 'cout << "Enter Second ";',
            timestamp: '0:56:25',
            seconds: 3385
          },
          {
            content: 'cin >> sec;',
            timestamp: '0:56:55',
            seconds: 3415
          },
          {
            content: 'myTime.setTime(hrs, min, sec);',
            timestamp: '0:56:55',
            seconds: 3415
          },
          {
            content: 'myTime.printTimeUniversal();',
            timestamp: '0:57:35',
            seconds: 3455
          },
          {
            content: 'myTime.printTimestandard();',
            timestamp: '0:57:35',
            seconds: 3455
          },
          {
            content: 'return 0;',
            timestamp: '1:00:20',
            seconds: 3620
          }
        ]
      }
    ],
    topics: [
      {
        title: 'Classes and Objects',
        time: '00:03:37'
      },
      {
        title: 'Setters and Getters',
        time: '00:08:32'
      },
      {
        title: 'Exercise 1',
        time: '00:13:43'
      },
      {
        title: 'Exercise 2',
        time: '00:26:34'
      },
      {
        title: 'Client Program',
        time: '00:50:22'
      }
    ]
  },
  {
    id: 'f3df3232-32b8-45dd-bee0-fbb2c0953ca6',
    src: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/2018-OOC-Lecture-07.mp4',
    videoTitle: 'OOC Lecture 07',
    description: '2018 Object Oriented Concepts Lecture 07',
    duration: '00:59:27',
    thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec7-thumbnail.jpg',
    topics: [
      {
        title: 'Overloading functions',
        time: '00:02:37'
      },
      {
        title: 'Constructors',
        time: '00:18:30'
      },
      {
        title: 'Exercise 1',
        time: '00:25:58'
      },
      {
        title: 'Exercise 2',
        time: '00:36:28'
      },
      {
        title: 'Destructors',
        time: '00:42:59'
      }]
  },
  {
    id: '4',
    src: 'assets/gravity_falls_opening.mp4',
    videoTitle: 'test title4',
    // tslint:disable-next-line:max-line-length
    description: 'test description long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  }
];
const reviewVideos = [
  {
    videoTitle: 'test title1',
    description: 'test description long long long very long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  }
];
const processingVideos = [
  {
    videoTitle: 'OOC Lecture 9',
    options: ['match slides', 'match code']
  },
  {
    videoTitle: 'OOC Lecture 10',
    options: ['match slides']
  },
  {
    videoTitle: 'OOC Lecture 11',
    options: ['denoise', 'match code']
  }
];

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor() { }

  getVideos() {
    return Observable.create(observer => {
      observer.next(videos);
    });
  }

  getVideosUpForReview() {
    return Observable.create(observer => {
      observer.next(reviewVideos);
    });
  }

  getProcessingVideos() {
    return Observable.create(observer => {
      observer.next(processingVideos);
    });
  }

  getVideo(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(videos.find((video) => video.id === id));
        observer.complete();
      }, 0);
    });
  }
}
