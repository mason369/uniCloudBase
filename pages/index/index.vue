<template>
    <view class="home">
        <view class="content">
            <view class="item" v-for="item in 5">
                <view class="text">
					<view class="title">撒地方撒大发送到发送到发送到发送到发送到噶事的噶十多个的上岗标题</view>
					<!-- info -->
					<view class="info">
						<text>是的</text>
						<text>2020-23-12</text>
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
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: "Hello",
        };
    },
    onLoad() {
        uniCloud
            .callFunction({
                name: "uniCloudBase",
            })
            .then((r) => {
                console.log(r);
            });
    },
    methods: {},
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
				.title{
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
					text{
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
}
</style>
