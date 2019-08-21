<template>
    <footer class="footer">
        <b-container>
            <b-row class="justify-content-center">
                <b-col>
                    <div>
                        <h3 class="text-info-footer">Accede para conocer más de la TREC y comenzar a practicarla.</h3>
                        <router-link to="/signup"><b-button variant="primary"  class="button-footer">Comenzar</b-button></router-link>
                        <router-link to="/signin"><b-button variant="primary" class="button-footer">Acceder</b-button></router-link>
                    </div>
                    <p class="copyright">@2019 - Neuro APP</p>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    background: #273036;
    padding: 40px 10px 10px 10px;
    text-align: center;
}

.button-footer{
    font-size: 18px;   
    margin: 10px;
    width: 150px;
    padding: 10px 0px;
}

.text-info-footer{
    color: white;
}

.copyright{
    margin-top: 20px;
    text-align: end;
    color: white;
}
</style>
