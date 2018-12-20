
   <template>
    <div id="war" dir="rtl" :style="{'height': deviceheight}">

        <portal-target name="semantic-ui-vue"></portal-target>
        <b-row>
            <!--for-Menu-->
            <b-col cols="4" :style="{'height': deviceheight}">


            </b-col>
            <!--for-Main-->
            <b-col cols="8" :style="{'height': deviceheight}">


            </b-col>
        </b-row>
    </div>




</template>


<script>
    console.log($('#war'));
    export default {
        data() {
            return {
                deviceheight: '',
            }
        },
        mounted: function() {
            this.heighter()
        },
        methods: {
            heighter() {
                this.deviceheight = window.innerHeight + 'px';

            },
        }
    }

</script>

<style>

</style>
