<template>
  <div id="menu">
    <table border="0" width="142">
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10">
          <font color="#FFCCCC">●</font>
        </td>
        <td width="148">
          <p>
            <router-link to="/">トップ</router-link>
            <!-- <a href="top.htm" target="right">トップ</a> -->
          </p>
        </td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10">
          <font color="#00FF00">●</font>
        </td>
        <td width="148">
          <p>
            <router-link to="/movie">映画出演</router-link>
            <!-- <a href="movie/eiga.htm" target="right">映画出演</a> -->
          </p>
        </td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10">
          <font color="#33FFFF">●</font>
        </td>
        <td width="148">
          <p>
            <router-link to="/drama">ドラマ出演</router-link>
            <!-- <a href="tv/tv.htm" target="right">ドラマ出演</a> -->
          </p>
        </td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10">
          <font color="#0099FF">●</font>
        </td>
        <td width="148">
          <p>
            <router-link to="/stage">舞台出演</router-link>
            <!-- <a href="stage/butai.htm" target="right">舞台出演</a> -->
          </p>
        </td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10">
          <font color="#0000FF">●</font>
        </td>
        <td width="148">
          <p>
            <router-link to="/photo">写真集</router-link>
            <!-- <a href="photo/photo.htm" target="right">写真集</a> -->
          </p>
        </td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10">
          <font color="#333399">●</font>
        </td>
        <td width="148">
          <p>
            <router-link to="/essay">出版本</router-link>
            <!-- <a href="essay/essay.htm" target="right">出版本</a> -->
          </p>
        </td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10">
          <font color="#CC00CC">●</font>
        </td>
        <td width="148">
          <p>
            <router-link to="/kanri">管理者</router-link>
            <!-- <a href="kanri/kanri.htm" target="right">管理者</a> -->
          </p>
        </td>
      </tr>
      <tr>
        <td width="15"></td>
        <td width="10"></td>
        <td width="148"></td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
#menu {
  background-color: #f0f0ff;
  margin: 0;
  padding: 0;
  height: 100%;
  border-right-style: ridge;
  border-right-width: 5px;
}

table {
  margin-top: 48px;
  margin-bottom: 48px;
  margin-left: 13px;
}

table tr {
  vertical-align: baseline;
  height: 12px;
}
</style>