<template>
    <view class="add">
        <form @submit="onSubmit">
            <view class="item">
                <input
                    v-model="detail.title"
                    type="text"
                    name="title"
                    placeholder="请输入标题"
                />
            </view>
            <view class="item">
                <input
                    type="text"
                    name="author"
                    placeholder="请输入作者"
                    v-model="detail.author"
                />
            </view>
            <view class="item">
                <textarea
                    type="text"
                    name="content"
                    placeholder="请输入内容"
                    v-model="detail.content"
                />
            </view>
            <!-- 提交 -->
            <view class="submit">
                <button form-type="reset">重置</button>
                <button form-type="submit" type="primary" :disabled="submitBtn">
                    提交
                </button>
            </view>
        </form>
    </view>
</template>

<script>
export default {
    data() {
        return {
            // 表单数据
            detail: {
                title: "",
                author: "",
                content: "",
            },
        };
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
                    // 返回上一页
                    setTimeout(() => {
                        uni.reLaunch({
                            url: "/pages/index/index",
                        });
                    }, 1000);
                });
        },
    },
    computed: {
        submitBtn() {
            // 判断是否有值
            if (
                this.detail.title &&
                this.detail.author &&
                this.detail.content
            ) {
                return false;
            } else {
                return true;
            }
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
