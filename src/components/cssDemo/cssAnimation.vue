<template>
  <div class="pageContainer">
    <div class="page-better">
      <div class="sprite"></div>
    </div>
  </div>
</template>
<style scoped>
/* .sprite {
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-image: url("../../common/images/cssDemo/cssanimation.png");
    animation: frame 333ms steps(20) both infinite;
}
@keyframes frame {
    0% {background-position: 0 0;}
    100% {background-position: -6000px 0;}
} */


/* @keyframes run{
    from{
        background-position: 0 0;
    }
    to{
        background-position: -1540px 0 ;
    }
}
.sprite{
    width:140px;
    height:140px;
    background: url("../../common/images/cssDemo/cssanimation.png");
    animation-name: run;
    animation-duration: 1s;
    animation-iteration-count:infinite;
} */

/*
@keyframes run{
0%, 8%{  background-position: 0 0;  }
9.2%, 17.2%{  background-position: -140px 0;  }
18.4%, 26.4%{  background-position: -280px 0 ;  }
27.6%, 35.6%{  background-position: -420px 0 ;  }
36.8%, 44.8%{  background-position: -560px 0 ;  }
46%, 54%{  background-position: -700px 0 ;  }
55.2%, 63.2%{  background-position: -840px 0 ;  }
64.4%, 72.4%{  background-position: -980px 0 ;  }
73.6%, 81.6%{  background-position: -1120px 0 ;  }
82.8%, 90.8%{  background-position: -1400px 0 ;  }
92%, 100%{  background-position: -1540px 0 ;  }
}
@-webkit-keyframes run{
0%, 8%{  background-position: 0 0;  }
9.2%, 17.2%{  background-position: -140px 0;  }
18.4%, 26.4%{  background-position: -280px 0 ;  }
27.6%, 35.6%{  background-position: -420px 0 ;  }
36.8%, 44.8%{  background-position: -560px 0 ;  }
46%, 54%{  background-position: -700px 0 ;  }
55.2%, 63.2%{  background-position: -840px 0 ;  }
64.4%, 72.4%{  background-position: -980px 0 ;  }
73.6%, 81.6%{  background-position: -1120px 0 ;  }
82.8%, 90.8%{  background-position: -1400px 0 ;  }
92%, 100%{  background-position: -1540px 0 ;  }
}
.sprite{
  width:140px;
  height:140px;
  animation:run 1s infinite;
  -webkit-animation:run 1s infinite;
  animation-fill-mode : backwards;
  -webkit-animation-fill-mode : backwards;
  margin: 0 auto;
  background: url("../../common/images/cssDemo/cssanimation.png");
} */



@keyframes run{
    0%{
        background-position: 0 0;
    }
    8.333%{
        background-position: -140px 0;
    }
    16.666%{
        background-position: -280px 0 ;
    }
    25.0%{
        background-position: -420px 0 ;
    }
    33.333%{
        background-position: -560px 0 ;
    }
    41.666%{
        background-position: -700px 0 ;
    }
    50.0%{
        background-position: -840px 0 ;
    }
    58.333%{
        background-position: -980px 0 ;
    }
    66.666%{
        background-position: -1120px 0 ;
    }
    75.0%{
        background-position: -1260px 0 ;
    }
    83.333%{
        background-position: -1400px 0 ;
    }
    91.666%{
        background-position: -1540px 0 ;
    }
    100%{
        background-position: 0 0 ;
    }
}
@-webkit-keyframes run{
    0%{
        background-position: 0 0;
    }
    8.333%{
        background-position: -140px 0;
    }
    16.666%{
        background-position: -280px 0 ;
    }
    25.0%{
        background-position: -420px 0 ;
    }
    33.333%{
        background-position: -560px 0 ;
    }
    41.666%{
        background-position: -700px 0 ;
    }
    50.0%{
        background-position: -840px 0 ;
    }
    58.333%{
        background-position: -980px 0 ;
    }
    66.666%{
        background-position: -1120px 0 ;
    }
    75.0%{
        background-position: -1260px 0 ;
    }
    83.333%{
        background-position: -1400px 0 ;
    }
    91.666%{
        background-position: -1540px 0 ;
    }
    100%{
        background-position: 0 0 ;
    }
}
.sprite{
    width:140px;
    height:140px;
    margin: 0 auto;
    background: url("../../common/images/cssDemo/cssanimation.png");
    animation:run 1s steps(1, start) infinite;
    -webkit-animation:run 1s steps(1, start) infinite;
}
</style>
