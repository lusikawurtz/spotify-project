<template>
    <div class="playlists">
        <v-main>
            <v-row v-for="(item, i) in playlists" :key="`navigationdrawer${i}`" row wrap>
                <v-col xs="10" sm="8" md="6">
                    <v-card color="gray" class="white--text">
                        <v-main fluid>
                            <v-row row>
                                <v-col>
                                    <v-card-title>
                                        <div>
                                            <div class="headline"> {{ item.name }}</div>
                                        </div>
                                    </v-card-title>
                                </v-col>
                            </v-row>
                        </v-main>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </div>
</template>

<script>
export default {
    computed: {
        playlists() {
            return this.$store.getters.getPlaylists
        }
    },
}
</script>