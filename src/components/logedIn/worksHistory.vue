<template>

<div class="col-md-10 col-md-offset-1"  v-if="mywork.modal" >
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" 
                    aria-label="Close" @click="mywork.modal = false">
                <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="modalLabel" >{{mywork.work}}</h4>
                <small style="color:darkgreen" class="pull-left"> انجام شده</small>
            </div>
            <div class="modal-body">
                کل مدت اجرا :   {{ (new Date(mywork.runtime)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}}
                <div class="pull-left"> دفعات انجام : {{mywork.startCounter}}</div>
        <table class="table table-hover" text-align="center">
            <thead>
                <tr>
                <th style="color:rgb(173, 84, 84)" >شروع</th>
                    <th style="color:rgb(173, 84, 84)">پایان</th><th style="color:rgb(173, 84, 84)">مدت اجرا </th>               
                </tr>
            </thead>
            <tbody >
                <tr>
                        <td >
                           
                            
                        </td>               
                        <td>
                            
                                    
                        </td> 
                        <td >
                        </td>  
                </tr>               
            </tbody>
                
            </table>
            </div>  
        </div>
    </div>
</div>
    
    
</template>

<script>
export default {
    name: "worksHistory",
    props:['mywork']
    
}
</script>

<style scoped>

</style>