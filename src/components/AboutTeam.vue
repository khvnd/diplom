
<template>
    <div class="about-team">
    <div class="about-team-info">
            <div class="info-content">
                <h3 class="team-subtitle">OUR TEAM</h3>
                <h2 class="team-title">Our Professionals Team</h2>
            </div>
           <router-link to="/team">
            <button class="btn-see-all">see all</button>
           </router-link> 
        </div>
    <div class="team-container">
      <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
        <div class="ab-background">
        <img :src="member.image" :alt="member.name" class="team-image" />
        <div class="overlay"></div>
        <div class="team-info">
          <h3 class="name">{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teamMembers: [
          { name: "Bondan Prabowo", role: "CEO", image: "/img/team1.png" },
          { name: "Bayu Aji", role: "VR Development", image: "/img/team2.png" },
          { name: "Agung Brandon", role: "VR Artist", image: "/img/team3.png" },
          { name: "Aril Laso", role: "UI/UX Designer", image: "/img/team4.png" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  .about-team {
    margin-bottom: 160px;
  }

.about-team-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 41px;
   }

    .team-subtitle {
        background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Chakra Petch";
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    }

    .team-title {
        color: rgb(255, 255, 255);
        font-size: 48px;
        font-weight: 600;
    }

  .team-container {
    display: flex;
    gap: 16px;
    justify-content: space-between;
  }
  
  .team-card {
    width: 293px;
    height: 388px;
    background: rgb(37 37 50);
    border: 2px solid;
    border-image-source: linear-gradient(147deg,rgba(255, 255, 255, 0.164),rgb(255, 255, 255, 0));
    border-image-slice: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .ab-background {
    position: relative;
    width: 274px;
    height: 370px;
    overflow: hidden;
  }

  .team-card:hover {
    border: 2px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
  }
  
  .team-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180.00deg, rgba(50, 70, 188, 0),rgb(25, 40, 131) 100%);
  }
  
  .team-info {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    font-size: 14px;
  }

  .name {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
  }

  .role {
    color: rgb(176, 176, 178);
    font-size: 12px;
    font-weight: 400;
  }

  .btn-see-all {
    background: rgba(255, 255, 255, 0.06);
    width: 140px;
    height: 50px;
    border: 1px solid;
    border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
}

.btn-see-all:hover {
  box-shadow: 0 0 10px #3498db, 0 0 40px #3498db;
}

@media (max-width: 1024px) {
  .team-container {
    gap: 94px;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .team-card {
    width: 413px;
    height: 522px;
  }

  .ab-background {
    width: 373px;
    height: 488px;
  }
}

@media (max-width: 768px) {
  .team-container {
    gap: 26px;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .team-card {
    width: 350px;
    height: 476px;
  }

  .ab-background {
    width: 326px;
    height: 451px;
  }
}

@media (max-width: 425px) {
    .team-container {
      flex-direction: column;
      align-items: center;
    }

    .team-title {
      font-size: 32px;
    }

    .info-content {
      text-align: center;
    }

    .about-team-info {
      flex-direction: column;
      gap: 10px;
    }

    .about-team {
      margin-bottom: 100px;
    }
}
  </style>
  