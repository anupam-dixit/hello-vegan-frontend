<script setup lang="ts">
import {endpoints} from "~/helpers/endpoints";
import type {PaginatedApiResponse} from "~/types";
import {pitLib} from "~/helpers/pitLib";
import moment from "moment";
import {env} from "~/helpers/env";
import {getToken} from "@firebase/messaging";

definePageMeta({
  layout:"default",
  middleware:"ensure-login"
})
const fb=getToken()
const page=ref(1)
const vlogs=ref([])
const {data:vlogsResponse,loading:loadingVlogsResponse,refresh:vlogsRefetch} =useFetch(endpoints.veganlog.index,{
  method:"post",
  body:{
    status:"approved"
  },
  headers:{
    Authorization: "Bearer "+pitLib.auth.get()?.token,
  },
  query:{page:page,pagination:1}
})
watch(vlogsResponse,vr=>{
  if (vr.data?.data){
    vlogs.value=vr.data?.data
  }
})
</script>

<template>
  <!-- main content -->
  <div class="main-content right-chat-active">

    <div class="middle-sidebar-bottom">
      <div class="middle-sidebar-left">
        <!-- loader wrapper -->
        <div class="preloader-wrap p-3">
          <div class="box shimmer">
            <div class="lines">
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
            </div>
          </div>
          <div class="box shimmer mb-3">
            <div class="lines">
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
            </div>
          </div>
          <div class="box shimmer">
            <div class="lines">
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
              <div class="line s_shimmer"></div>
            </div>
          </div>
        </div>
        <!-- loader wrapper -->
        <div class="row feed-body">
          <div class="col-xl-8 col-xxl-9 col-lg-8">

           <common-veganlog-create></common-veganlog-create>

            <div v-for="v in vlogs" :key="n" class="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
              <div class="card-body p-0 d-flex">
                <figure class="avatar me-3"><img src="/tpl1/images/user-8.png" alt="image" class="shadow-sm rounded-circle w45"></figure>
                <h4 class="fw-700 text-grey-900 font-xssss mt-1">{{v?.created_by?.[0]?.name}} <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{{moment(v?.created_at).fromNow()}}</span></h4>
                <a href="#" class="ms-auto" id="dropdownMenu5" data-bs-toggle="dropdown" aria-expanded="false"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
                <div class="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu5">
                  <ul>
                    <li><i class="fa-solid fa-check me-2"></i> Save Link</li>
                  </ul>
                </div>
              </div>
              <div v-if="v?.media?.length" class="card-body p-0 mb-3 rounded-3 overflow-hidden">
                <div v-for="media in v?.media" class="">
                  <a v-if="media?.ref_code=='vegan_log_video'" class="mb-2 rounded">
                    <video controls class="float-right w-100">
                      <source :src="env.BASEPOINT+ media?.path" type="video/mp4">
                    </video>
                  </a>
                  <img v-if="media?.ref_code=='vegan_log_image'" :src="media?.is_local?env.BASEPOINT+ media?.path:media?.path" class="img-fluid mb-2">
                </div>
              </div>
              <div class="card-body p-0 me-lg-5">
                <p v-html="v?.content"></p>
              </div>
              <div class="card-body d-flex p-0">
                <a href="#" class="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2">
                  <i class="fa-solid text-white fa-thumbs-up bg-blue-gradiant me-1 btn-round-xs fa-lg"></i>
                  <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs"></i>
                  2.8K Like
                </a>
                <div class="emoji-wrap">
                  <ul class="emojis list-inline mb-0">
                    <li class="emoji list-inline-item"><i class="fa-regular fa-face-angry"></i></li>
                    <li class="emoji list-inline-item"><i class="fa-regular fa-face-surprise"></i></li>
                  </ul>
                </div>
                <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i><span class="d-none-xss">22 Comment</span></a>
                <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span class="d-none-xs">Share</span></a>
              </div>
            </div>



          </div>
          <div class="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
            <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3">
              <div class="card-body d-flex align-items-center p-4">
                <h4 class="fw-700 mb-0 font-xssss text-grey-900">Friend Request</h4>
                <a href="default-member.html" class="fw-600 ms-auto font-xssss text-primary">See all</a>
              </div>
              <div class="card-body d-flex pt-4 ps-4 pe-4 pb-0 border-top-xs bor-0">
                <figure class="avatar me-3"><img src="/tpl1/images/user-7.png" alt="image" class="shadow-sm rounded-circle w45"></figure>
                <h4 class="fw-700 text-grey-900 font-xssss mt-1">Anthony Daugloi <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
              </div>
              <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                <a href="#" class="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</a>
                <a href="#" class="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl">Delete</a>
              </div>

              <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0">
                <figure class="avatar me-3"><img src="/tpl1/images/user-8.png" alt="image" class="shadow-sm rounded-circle w45"></figure>
                <h4 class="fw-700 text-grey-900 font-xssss mt-1">Mohannad Zitoun <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
              </div>
              <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                <a href="#" class="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</a>
                <a href="#" class="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl">Delete</a>
              </div>

              <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0">
                <figure class="avatar me-3"><img src="/tpl1/images/user-12.png" alt="image" class="shadow-sm rounded-circle w45"></figure>
                <h4 class="fw-700 text-grey-900 font-xssss mt-1">Mohannad Zitoun <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
              </div>
              <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                <a href="#" class="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</a>
                <a href="#" class="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl">Delete</a>
              </div>
            </div>

            <div class="card w-100 shadow-xss rounded-xxl border-0 p-0 ">
              <div class="card-body d-flex align-items-center p-4 mb-0">
                <h4 class="fw-700 mb-0 font-xssss text-grey-900">Confirm Friend</h4>
                <a href="default-member.html" class="fw-600 ms-auto font-xssss text-primary">See all</a>
              </div>
              <div class="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3">
                <figure class="avatar me-2 mb-0"><img src="/tpl1/images/user-7.png" alt="image" class="shadow-sm rounded-circle w45"></figure>
                <h4 class="fw-700 text-grey-900 font-xssss mt-2">Anthony Daugloi <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
                <a href="#" class="btn-round-sm bg-white text-grey-900 feather-chevron-right font-xss ms-auto mt-2"></a>
              </div>
              <div class="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3" style="margin-bottom: 0 !important;">
                <figure class="avatar me-2 mb-0"><img src="/tpl1/images/user-8.png" alt="image" class="shadow-sm rounded-circle w45"></figure>
                <h4 class="fw-700 text-grey-900 font-xssss mt-2"> David Agfree  <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
                <a href="#" class="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"></a>
              </div>
              <div class="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3">
                <figure class="avatar me-2 mb-0"><img src="/tpl1/images/user-12.png" alt="image" class="shadow-sm rounded-circle w45"></figure>
                <h4 class="fw-700 text-grey-900 font-xssss mt-2">Hugury Daugloi <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
                <a href="#" class="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"></a>
              </div>

            </div>

            <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
              <div class="card-body d-flex align-items-center p-4">
                <h4 class="fw-700 mb-0 font-xssss text-grey-900">Suggest Group</h4>
                <a href="default-group.html" class="fw-600 ms-auto font-xssss text-primary">See all</a>
              </div>
              <div class="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                <img src="/tpl1/images/e-2.jpg" alt="img" class="img-fluid rounded-xxl mb-2">
              </div>
              <div class="card-body dd-block pt-0 ps-4 pe-4 pb-4">
                <ul class="memberlist mt-1 mb-2 ms-0 d-block">
                  <li class="w20"><a href="#"><img src="/tpl1/images/user-6.png" alt="user" class="w35 d-inline-block" style="opacity: 1;"></a></li>
                  <li class="w20"><a href="#"><img src="/tpl1/images/user-7.png" alt="user" class="w35 d-inline-block" style="opacity: 1;"></a></li>
                  <li class="w20"><a href="#"><img src="/tpl1/images/user-8.png" alt="user" class="w35 d-inline-block" style="opacity: 1;"></a></li>
                  <li class="w20"><a href="#"><img src="/tpl1/images/user-3.png" alt="user" class="w35 d-inline-block" style="opacity: 1;"></a></li>
                  <li class="last-member"><a href="#" class="bg-greylight fw-600 text-grey-500 font-xssss w35 ls-3 text-center" style="height: 35px; line-height: 35px;">+2</a></li>
                  <li class="ps-3 w-auto ms-1"><a href="#" class="fw-600 text-grey-500 font-xssss">Member apply</a></li>
                </ul>
              </div>



            </div>

            <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3">
              <div class="card-body d-flex align-items-center p-4">
                <h4 class="fw-700 mb-0 font-xssss text-grey-900">Suggest Pages</h4>
                <a href="default-group.html" class="fw-600 ms-auto font-xssss text-primary">See all</a>
              </div>
              <div class="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                <img src="/tpl1/images/g-2.jpg" alt="img" class="img-fluid rounded-xxl mb-2">
              </div>
              <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                <a href="#" class="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i class="feather-external-link font-xss me-2"></i> Like Page</a>
              </div>

              <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 overflow-hidden">
                <img src="/tpl1/images/g-3.jpg" alt="img" class="img-fluid rounded-xxl mb-2 bg-lightblue">
              </div>
              <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                <a href="#" class="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i class="feather-external-link font-xss me-2"></i> Like Page</a>
              </div>


            </div>

            <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3">
              <div class="card-body d-flex align-items-center  p-4">
                <h4 class="fw-700 mb-0 font-xssss text-grey-900">Event</h4>
                <a href="default-event.html" class="fw-600 ms-auto font-xssss text-primary">See all</a>
              </div>
              <div class="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                <div class="bg-success me-2 p-3 rounded-xxl"><h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span class="ls-1 d-block font-xsss text-white fw-600">FEB</span>22</h4></div>
                <h4 class="fw-700 text-grey-900 font-xssss mt-2">Meeting with clients <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
              </div>

              <div class="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                <div class="bg-warning me-2 p-3 rounded-xxl"><h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span class="ls-1 d-block font-xsss text-white fw-600">APR</span>30</h4></div>
                <h4 class="fw-700 text-grey-900 font-xssss mt-2">Developer Programe <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
              </div>

              <div class="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                <div class="bg-primary me-2 p-3 rounded-xxl"><h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span class="ls-1 d-block font-xsss text-white fw-600">APR</span>23</h4></div>
                <h4 class="fw-700 text-grey-900 font-xssss mt-2">Aniversary Event <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  <!-- main content -->
</template>

<style scoped></style>
