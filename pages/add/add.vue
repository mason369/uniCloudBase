<template>
    <view class="add">
        <form @submit="onSubmit">
            <view class="item">
                <input type="text" name="title" placeholder="请输入标题" />
            </view>
            <view class="item">
                <input type="text" name="author" placeholder="请输入作者" />
            </view>
            <view class="item">
                <textarea type="text" name="content" placeholder="请输入内容" />
            </view>
            <!-- 提交 -->
            <view class="submit">
                <button form-type="reset">重置</button>
                <button form-type="submit" type="primary">提交</button>
            </view>
        </form>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        onSubmit(e) {
            // 获取表单数据
            let detail = e.detail.value;
            // 调用云函数
            uniCloud
                .callFunction({
                    name: "art_add_row",
                    data: {
                        detail,
                    },
                })
                .then((res) => {
                    // 提示
                    uni.showToast({
                        title: "添加成功",
                        icon: "success",
                    });
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.add {
    padding: 30rpx;
    .item {
        padding-bottom: 20rpx;
        input,
        textarea {
            width: 100%;
            height: 80rpx;
            border: 1px solid #eee;
            padding: 0 20rpx;
            border-radius: 10rpx;
            box-sizing: border-box;
        }
        textarea {
            height: 200rpx;
        }
    }
    .submit {
        text-align: center;
        button {
            width: 100%;
            height: 80rpx;
            line-height: 80rpx;
            border-radius: 10rpx;
            margin-bottom: 20rpx;
            // 交互
            transition: all 0.3s;
            &:active {
                background: #ccc;
            }
        }
    }
}
</style>
