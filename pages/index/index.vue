<template>
    <view class="home">
        <view class="content">
            <view
                class="item"
                v-for="item in list"
                :key="item._id"
                @click="goDetail(item._id)"
            >
                <view class="text">
                    <view class="title">{{ item.title }}</view>
                    <!-- info -->
                    <view class="info">
                        <text>{{ item.auth }}</text>
                        <text>{{ item.posttime }}</text>
                        <text>删除</text>
                    </view>
                </view>
                <view class="pic">
                    <image
                        mode="aspectFill"
                        src="../../static/images/nopic.jpg"
                    ></image>
                </view>
            </view>
        </view>
        <view class="goAdd" @click="goAdd">+</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    onLoad() {
        this.getData();
    },
    methods: {
        goAdd() {
            uni.navigateTo({
                url: "/pages/add/add",
            });
        },
        // 获取数据
        getData() {
            uniCloud
                .callFunction({
                    name: "art_get_all",
                })
                .then((res) => {
                    this.list = res.result.data;
                });
        },
    },
};
</script>

<style lang="scss">
.home {
    .content {
        padding: 30rpx;
        .item {
            display: flex;
            justify-content: space-between;
            padding: 20rpx 0;
            border-bottom: 1px solid #eee;
            padding-right: 20rpx;
            .text {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title {
                    font-size: 50rpx;
                    color: #333;
                    text-align: justify;
                    // 超出两行显示省略号
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .info {
                    font-size: 28rpx;
                    color: #888;
                    text {
                        padding-right: 20rpx;
                    }
                }
            }
            .pic {
                width: 260rpx;
                height: 180rpx;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .goAdd {
        width: 120rpx;
        height: 120rpx;
        background-color: #2b9939;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 50rpx;
        position: fixed;
        right: 60rpx;
        bottom: 100rpx;
        box-shadow: 0 0 20rpx rgba(43, 153, 57, 0.7);
    }
}
</style>
