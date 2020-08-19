<template>
<div >
<div   class="modal fade" id="me" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" 
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="modalLabel" >{{m.work}}</h4>
            </div>
            <div class="modal-body">
                مدت اجرا :   {{ (new Date(mywork.runtime)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}}
                <div class="pull-left"> دفعات انجام : {mywork.startCounter}}</div>
            </div>  
        </div>
        </div>
    </div>
</div>
    
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>