function rand(max, min) {
    return Math.floor(Math.random() * (max - min));
}



const app = Vue.createApp({
    data() {
        return {
            slayer_health: 100,
            monster_health: 100,
            logs: [],
            count: 0,
            winner: null,
        };
    },

    watch: {
        slayer_health(value) {
            if (value <= 0 && this.monster_health <= 0) {
                this.winner = 'draw';
            } else if (this.monster_health <= 0) {
                this.winner = 'slayer';
            }
        },
        monster_health(value) {
            if (value <= 0 && this.slayer_health <= 0) {
                this.winner = 'draw';
            } else if (this.slayer_health <= 0) {
                this.winner = 'monster';
            }
        }
    },

    computed: {
        slayer_bar_style() {
            return { width: this.slayer_health + '%' };
        }
    },

    methods: {
        attack_monster() {
            this.count++;
            damage = rand(13, 8);
            this.monster_health -= damage;
            this.logs.push(`the monster dealt ${damage} damage`);
            this.attack_slayer();
        },

        special_attack() {
            if (this.count > 2) {
                this.count = 0;
                monster_damage = rand(13, 2);
                slayer_damage = rand(13, 10);
                this.monster_health -= monster_damage;
                this.slayer_health -= slayer_damage;
                this.logs.push(`the monster dealt ${monster_damage} damage`);
                this.logs.push(`the slayer dealt ${slayer_damage} damage`);
                this.attack_slayer();
            }
        },

        heal_slayer() {
            heal = rand(13, 2);
            this.slayer_health += heal;
            this.logs.push(`the slayer heal ${heal}`);
            this.attack_slayer();
        },

        surrender() {
            this.count = 0;
            this.slayer_health = 0;
            this.logs.push(`the slayer surrendar`);
        },

        attack_slayer() {
            damage = rand(13, 6);
            this.slayer_health -= damage;
            this.logs.push(`the slayer dealt ${damage} damage`);
        },

        reset() {
            this.slayer_health = 100;
            this.monster_health = 100;
            this.logs = [];
            this.count = 0;
            this.winner = null;
        }
    }
});

app.mount('#game');