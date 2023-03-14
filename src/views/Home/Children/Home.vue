<template>
  <div class="container" id="container">
    <div class="head">
      <div class="left">
        <img src="@/assets/imgs/Home/avatar.png" alt="" class="avatar" />
        <div class="info">
          <p class="name">{{ name ? name : '张三' }}</p>
          <div class="unit">
            <p class="unitname">{{ officeName ? officeName : '科研处' }}</p>
            <p class="divid"></p>
            <van-dropdown-menu teleport="#container">
              <van-dropdown-item v-model="current" :options="roleList" />
            </van-dropdown-menu>
          </div>
        </div>
      </div>

      <!-- <van-dropdown-menu teleport="#container">
        <van-dropdown-item v-model="current" :options="roleList" />
      </van-dropdown-menu> -->

      <p class="out" @click="handleLoginOut">退出</p>
    </div>

    <div class="main">
      <van-pull-refresh
        success-text="刷新成功"
        v-model="refreshLoading"
        @refresh="onRefresh"
      >
        <p>
          刷新 {{ count }}

          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem quis explicabo fuga obcaecati, dignissimos praesentium
          corrupti dolore esse nostrum vero. Culpa temporibus enim quas animi.
          Maxime accusamus molestiae ipsum mollitia magnam hic nulla. Nihil,
          sunt at minus accusamus laborum ea alias deleniti error cum totam
          exercitationem laboriosam dolor aspernatur vero dolorum facilis
          excepturi? Vero, nesciunt quidem harum ea quisquam dolorem nobis
          natus, dicta deserunt distinctio explicabo. Fugiat obcaecati a
          quaerat? Aperiam impedit molestiae consectetur quisquam. Tempora
          expedita, sapiente ratione voluptates delectus earum repellendus
          suscipit facere sed dolor inventore natus atque, repellat quidem cum
          voluptatum maiores, vel dicta perferendis recusandae ad beatae
          quibusdam. Necessitatibus ipsam neque voluptate est eum rerum quasi
          animi, esse nihil molestiae fugiat voluptates dicta, placeat omnis eos
          officia voluptatibus dignissimos alias ipsum. Odit incidunt nam
          inventore, nihil vel minus libero magnam iste quaerat eveniet, neque
          molestias blanditiis adipisci dolorem sed. Voluptatum reiciendis, sint
          mollitia repellat illum eveniet tenetur nisi libero hic praesentium
          dolor voluptatem fugit aut ab odit ex nobis minima totam obcaecati
          harum consequatur fugiat. Tempore, accusantium. Eaque tempore
          quibusdam fuga beatae qui vero praesentium, doloremque, atque, sequi
          aspernatur dolores. Id repudiandae, labore facilis eligendi cumque
          animi inventore, soluta vitae repellendus deleniti natus ducimus
          dolorum sapiente similique? Expedita rerum natus impedit, officiis
          repellendus perferendis ipsam voluptatibus maiores sed ducimus quo eum
          quasi iusto quis illum quia voluptate saepe repudiandae, error fugiat
          aspernatur earum! Fuga assumenda corporis asperiores ex possimus atque
          soluta, qui et ab totam nam rem enim laborum cumque quibusdam
          provident! Quod veniam et, officiis necessitatibus amet sequi culpa
          nihil obcaecati qui ducimus placeat. Rem vel at dolor deleniti
          voluptatibus eaque voluptatum iure, nemo non sapiente recusandae
          dolorum perferendis laborum necessitatibus iste temporibus veniam
          itaque soluta officia. Provident, officia sed odio pariatur esse
          dolorum illo maiores corporis sit perspiciatis consequatur ullam
          adipisci animi et, vitae libero fuga enim amet earum quasi at
          architecto harum autem! Itaque sint cupiditate velit repellendus
          harum! Ullam ducimus amet molestias dolorum delectus repellat iusto
          eum, accusantium dicta dolor reprehenderit at libero sint natus ad
          voluptatibus culpa provident minima enim et dolore quas?
          Necessitatibus aliquid, recusandae dolorem praesentium voluptatibus
          placeat natus distinctio accusamus quasi. Dolorem ad non, dolore vel
          adipisci alias repellendus quaerat repudiandae dignissimos, nemo
          officia! Deleniti unde aperiam reprehenderit suscipit ipsam aliquid
          voluptatibus et atque, laboriosam, modi sunt quasi soluta ipsa odio
          officiis, tempore accusantium quis porro fugiat fuga ut nesciunt
          adipisci necessitatibus? Rem, dignissimos? Enim, dolores quae adipisci
          rerum sed iusto est neque harum deserunt ullam corrupti sunt, dolore
          delectus perspiciatis ea itaque eligendi illo sequi molestias modi!
          Sequi ea id enim optio ipsa. Nobis, consectetur? Voluptatem eligendi
          ratione qui quia voluptates repellendus officiis cum tenetur
          asperiores aspernatur deleniti facilis itaque minus, veritatis
          voluptatum, reprehenderit, expedita perferendis rem? Provident natus
          eos, fugiat assumenda repudiandae inventore odio itaque voluptatum
          nisi nostrum dicta ducimus facilis quibusdam vitae iusto! Fugiat nemo
          nobis soluta reprehenderit sint, ullam perspiciatis voluptatum, iure
          id eveniet autem, recusandae voluptatem eaque? Quae soluta pariatur
          quis possimus repudiandae nemo eos cupiditate beatae voluptatem
          consequuntur fugit sint voluptatum, optio illo ab, neque laboriosam
          repellendus. Totam harum nemo praesentium voluptas, nam quaerat? Sint
          minima numquam dignissimos molestiae. Labore provident ipsam
          voluptatibus odio. Facilis sapiente incidunt aliquid. Unde dolore in,
          officiis temporibus cupiditate iure facilis earum pariatur. Iusto,
          expedita? Et veritatis minus dolorum maiores nihil laudantium ad
          voluptatem omnis voluptas libero. Harum aperiam molestiae maiores,
          deserunt quibusdam similique dicta saepe in facere mollitia temporibus
          pariatur at iste cumque! Magnam vel facere fugiat earum rem
          distinctio, in velit, quis qui reprehenderit perspiciatis. Totam
          consequatur perferendis cumque error similique voluptates pariatur
          dolor sed eveniet ipsa modi quod omnis ratione natus quisquam
          voluptatibus facilis, doloribus aspernatur, adipisci ex magnam
          delectus perspiciatis! Distinctio quod magnam nulla in? Sint
          voluptatem enim blanditiis laudantium repellat at culpa ullam odit sed
          delectus tempore, voluptatum sequi et veritatis ab reprehenderit ut
          aliquam, nostrum repellendus dolores! Doloribus magnam labore officiis
          amet incidunt porro omnis, ratione praesentium dolorem, impedit
          accusamus distinctio necessitatibus sunt itaque nobis ut nisi quis ad
          facilis beatae aspernatur! Tempore modi laborum omnis, ipsa fugit,
          repellendus neque molestiae eaque non id, sunt harum. Quia quas
          voluptatem quidem, commodi molestiae rem maiores placeat. Perspiciatis
          sapiente adipisci praesentium, reiciendis natus, animi placeat veniam
          totam qui, rerum nulla. Quis quae tenetur, perferendis harum ullam sit
          dolorum ab nulla a suscipit obcaecati officia iure impedit? Esse
          corrupti hic fugiat magnam doloribus harum rerum est nam voluptate
          maxime fugit itaque distinctio repellendus quo aperiam neque
          voluptatum aspernatur laboriosam eum, iste, veritatis praesentium.
          Ullam nulla quae repellat eaque fuga ipsam reprehenderit provident?
          Autem facilis accusantium voluptas, rem numquam esse asperiores velit
          incidunt minima consequatur magni ipsum cumque maxime deleniti
          voluptates veritatis et repudiandae non corrupti quae deserunt illo.
          Repudiandae modi dolores dicta nihil sed nulla placeat aperiam. Id
          sapiente animi consequatur maiores qui neque in provident natus,
          ratione et cupiditate praesentium asperiores quibusdam corrupti
          quisquam nam sunt non, libero est nisi tempore facilis sint rem quae.
          Similique in ratione aut porro suscipit? Minima consectetur
          necessitatibus incidunt ea eveniet sint similique fuga repudiandae
          commodi, saepe ratione neque aspernatur nemo dolorum unde at.
          Dignissimos eos soluta nulla rem cum nesciunt, non quasi. Quo eaque
          dicta officiis a numquam non nobis suscipit beatae tenetur earum ut
          repudiandae quibusdam provident nostrum odit quisquam voluptatem rerum
          recusandae, minima atque amet? Optio nobis repellendus ad quidem minus
          sunt eligendi quia consequuntur nihil! Assumenda deserunt maiores,
          reprehenderit molestias eaque deleniti ducimus voluptates cum dolorem
          dolorum mollitia in harum earum nobis repellendus ex neque! Iusto
          animi eum id praesentium laboriosam suscipit, quidem consequuntur
          libero aliquam, accusantium nemo impedit! Quae odio obcaecati
          laudantium suscipit sunt quis doloribus voluptas voluptatum animi
          eaque esse nemo veritatis dolore dolorem, repellendus voluptates.
          Doloremque, quis. Mollitia tempora fugiat accusantium. Sapiente
          delectus voluptatibus perferendis excepturi, eius neque quisquam sit a
          dolorum error quam corporis! Recusandae nesciunt repellendus esse,
          dignissimos voluptatum voluptatibus harum ipsam provident ullam
          quibusdam soluta tenetur aliquam. Quis sint rem deserunt, mollitia
          exercitationem eius molestias magnam assumenda ratione nemo dolor
          obcaecati! Quasi, placeat provident facere aperiam, accusamus
          repellat, hic officiis veniam fugit suscipit labore deserunt
          laboriosam dignissimos?
        </p>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loginOut, getCurrentLoginUserInfo } from '@/api/Login/login'
import useLogin from '@/store/Login/Login'
import storage from '@/utils/storage'

const useLoginStore = useLogin()

const handleLoginOut = () => {
  loginOut().then((res) => {
    if (res.status == 200) {
      useLoginStore.setLoginOutAction()
    }
  })
}

onMounted(() => {
  getCurrentUserInfo()
})

const roleId = ref(storage.get('roleId') ? storage.get('roleId') : 0)
const roleList = ref([])
const mockRoleList = (roleList) => {
  let list = []
  roleList.forEach((item) => {
    list.push({
      text: item.name,
      value: item.id
    })
  })

  return list
}
roleList.value = JSON.parse(storage.get('roleList'))
  ? mockRoleList(JSON.parse(storage.get('roleList')))
  : []

const current = ref(1)
roleList.value.forEach((item) => {
  if (item.value == roleId.value) {
    current.value = item.value
    storage.set('current', current.value)
  }
})

const name = ref('')
const officeName = ref('')
const getCurrentUserInfo = () => {
  console.log('asdasd')
  getCurrentLoginUserInfo({
    principal: roleId
  }).then((res) => {
    if (res.data.status == 200) {
      name.value = res.data.data.name
      officeName.value = res.data.data.officeName
      storage.set('officeName', res.data.data.officeName)
      storage.set('name', res.data.data.name)
    }
  })
}

const count = ref(100)
const refreshLoading = ref(false)
const onRefresh = () => {
  console.log('refresh')
  count.value = 1000
  setTimeout(() => {
    count.value = 10
    refreshLoading.value = false
  }, 1000)
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  .head {
    width: 100%;
    height: 176px;
    background-color: #0066ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .avatar {
        width: 96px;
        height: 96px;
        border-radius: 16px;
      }
      .info {
        margin-left: 16px;
        font-style: normal;
        color: #ffffff;
        font-weight: 400;
        .name {
          font-size: 32px;
          line-height: 42px;
          margin-bottom: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .unit {
          font-size: 28px;
          width: 100%;
          height: 37px;
          opacity: 0.6;
          display: flex;
          align-items: center;
          .divid {
            width: 0px;
            height: 23px;
            border: 1px solid #ffffff;
            margin: 0 10px;
          }
        }
      }
    }
    .out {
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      border-radius: 16px;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      color: #ffffff;
    }
  }
  .main {
    padding: 10px 10px 160px 10px;
    box-sizing: border-box;
    p {
      background-color: red;
      height: 100%;
    }
  }
}

::v-deep(.van-dropdown-menu__item) {
  background-color: #0066ff;
}
::v-deep(.van-dropdown-menu__title) {
  padding-left: 0;
}
::v-deep(.van-dropdown-item) {
  top: 175px !important;
}
::v-deep(.van-pull-refresh) {
  z-index: 9;
}
</style>
