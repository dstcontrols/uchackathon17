<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        Quasar Framework v{{$q.version}}
      </q-toolbar-title>
    </div>

    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
    <div class="layout-view">
        <awptest></awptest>
    </div>
  </q-layout>
</template>

<script>
import GoogleMap from './GoogleMap'

export default {
  name: 'Dashboard',
  components: { GoogleMap },
  data () {
    return {}
  }
}
</script>

<style>
</style>
