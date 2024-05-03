<template>
    <div class="login">
      <v-toolbar app dark color="black" height="120">
        <v-toolbar-title class="text-h2 text-center"> Spotify Shuffler </v-toolbar-title>
      </v-toolbar>
      
      <v-container>
        <v-col>
          <v-card border="opacity-10" class="mx-auto" max-width="1000" min-height="200" rounded="xl">
            <v-card class="mx-auto" max-width="800" min-height="50">
              <p class="font-weight-light text-end">
                Do you know that the algorythm for shuffleling that Spotify using make you listen to same 10 songs over
                and
                over?
                <br>
                Want to shuffle your playlist true randomly?
              </p>
              <p>
                <v-btn href="https://github.com/lusikawurtz" target="_blank">
                  Login with Spotify
                </v-btn>
              </p>
            </v-card>
          </v-card>
        </v-col>
      </v-container>
    </div>
</template>